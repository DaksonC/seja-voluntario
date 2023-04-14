import { pool } from '@/config/db'
import { sendEmailToONGOnRegistration } from '@/server/email'
import { ResultSetHeader } from 'mysql2'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return await getONGs(req, res)
    case 'POST':
      return await postONGs(req, res)
  }
}

async function getONGs(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [result] = await pool.query('SELECT * FROM ongs')

    return res.status(200).json({ result })
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function postONGs(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, description, city, state } = req.body

    if (!name || !email || !description || !city || !state) {
      return res.status(400).json({ error: 'Missing body params' })
    }

    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO ongs SET ?',
      {
        name,
        email,
        description,
        city,
        state,
      },
    )

    if (result.affectedRows === 1) {
      await sendEmailToONGOnRegistration({ name, email, city, description })
    }

    return res
      .status(200)
      .json({ name, email, description, city, state, id: result.insertId })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
