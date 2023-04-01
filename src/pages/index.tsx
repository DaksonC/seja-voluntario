import Head from 'next/head'
import { Container } from './styles'
import { ButtonRegister } from '@/components/ButtonRegister'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Seja Voluntário</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <Header
            title="ONG 🏩"
            description="Cadastre sua ONG e encontre voluntários para ajudar a transformar o mundo."
          />
          <ButtonRegister title="Cadastrar ONG" />
        </div>
        <div>
          <Header
            title="Voluntário 👤"
            description="Encontre ONGs na sua cidade e ajude a transformar o mundo."
          />
          <ButtonRegister title="Sou Voluntário" />
        </div>
      </Container>
    </>
  )
}
