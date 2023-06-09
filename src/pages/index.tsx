import Head from 'next/head'
import { MdVolunteerActivism } from 'react-icons/md'
import { Container } from './styles'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Seja Voluntário!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <div>
          <h1>Juntos pela solidariedade:</h1>
          <p>
            cadastre sua <span>ONG</span> ou seja um <span>voluntário</span> e
            ajude a fazer a diferença na vida de quem mais precisa!
          </p>
          <MdVolunteerActivism />
        </div>
      </Container>
    </>
  )
}
