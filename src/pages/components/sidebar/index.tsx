import {
  SidebarContainer,
  SidebarItem,
  SidebarMenu,
  SignInButton,
} from './styles'

import logo from '../../../assets/logo.svg'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react'
import { useRouter } from 'next/router'

export function Sidebar() {
  const router = useRouter()

  return (
    <SidebarContainer>
      <div>
        <Image src={logo} alt="" />
        <SidebarMenu>
          <SidebarItem onClick={() => router.push('/beginning')} focused={true}>
            <ChartLineUp />
            Início
          </SidebarItem>
          <SidebarItem>
            <Binoculars />
            Explorar
          </SidebarItem>
        </SidebarMenu>
      </div>
      <SignInButton>
        Fazer login
        <SignIn />
      </SignInButton>
    </SidebarContainer>
  )
}
