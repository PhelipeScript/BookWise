import Image from 'next/image'
import logoBanner from '../../assets/logoBanner.png'
import { ButtonAccess, Container, LoginContainer } from './styles'

import logoGoogle from '../../assets/logoGoogle.png'
import logoGithub from '../../assets/logoGithub.png'
import logoRocket from '../../assets/logoRocket.png'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  function guest() {
    router.push('/beginning')
  }

  return (
    <Container>
      <Image src={logoBanner} quality={100} width={600} height={940} alt="" />
      <LoginContainer>
        <div>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>
        <ButtonAccess>
          <Image src={logoGoogle} quality={100} width={32} height={32} alt="" />
          Entrar com Google
        </ButtonAccess>
        <ButtonAccess>
          <Image src={logoGithub} quality={100} width={32} height={32} alt="" />
          Entrar com GitHub
        </ButtonAccess>
        <ButtonAccess onClick={() => guest()}>
          <Image src={logoRocket} quality={100} width={32} height={32} alt="" />
          Acessar como visitante
        </ButtonAccess>
      </LoginContainer>
    </Container>
  )
}
