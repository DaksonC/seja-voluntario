import { createTransport, Transporter } from 'nodemailer';
import { pool } from '../config/db';

interface Voluntarys {
  name: string;
  email: string;
  city: string;
  description: string;
}

interface Ong {
  name: string;
  email: string;
  city: string;
}

// Cria o transporter do nodemailer
const transporter: Transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Função para enviar o email para a ONG
async function sendEmailToONG(voluntarys: Voluntarys, ong: Ong): Promise<void> {
  // Cria o email
  const subject = 'Novo voluntário cadastrado na cidade';
  const body = `Um novo voluntário se cadastrou em sua cidade! Entre em contato. \n\nAqui estão seus dados: \n- Nome: ${voluntarys.name} \n- E-mail: ${voluntarys.email} \n- Descrição: ${voluntarys.description}`;
  const message = {
    from: process.env.EMAIL_USER,
    to: ong.email,
    subject,
    text: body
  };

  // Envia o email
  const result = await transporter.sendMail(message);
  console.log(`Email enviado para ${ong.name} (${ong.email}): ${result.messageId}`);
}

// Função para buscar a ONG na mesma cidade do voluntário e enviar o email
export async function sendEmailToONGIfNeeded(voluntarys: Voluntarys): Promise<void> {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM ongs WHERE city = ?', [voluntarys.city]) as unknown as [Ong[]];
    if (rows.length > 0) {
      // await sendEmailToONG(voluntarys, rows[0]);
      const promises = rows.map(ong => sendEmailToONG(voluntarys, ong));
      await Promise.all(promises);
    }
  } catch (err) {
    console.error('Erro ao buscar ONGs do banco de dados:', err);
  } finally {
    connection.release();
  }
}

// Exemplo de como usar a função sendEmailToONGIfNeeded após salvar o voluntário no banco de dados
// Suponha que o voluntário esteja armazenado em uma variável chamada "voluntarys"
// await sendEmailToONGIfNeeded(voluntarys);
// console.log('Email enviado para a ONG, se aplicável.');