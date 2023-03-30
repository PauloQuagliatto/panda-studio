import { useRouter } from 'next/router'
import { CaretDown } from 'phosphor-react'

import pandaImage from '@/assets/panda-red.png'

import { Container, Nav, NavLink, StyledImage } from './styles'

export function Header() {
  const route = useRouter()
  return (
    <Container>
      <Nav>
        <NavLink href="#" className="active">
          Home
        </NavLink>
        <NavLink href="#">
          Biblioteca
          <CaretDown />
        </NavLink>

        <StyledImage src={pandaImage} alt="panda-logo" />

        <NavLink href="#">
          Contate-nos
        </NavLink>
        <NavLink href="#">
          Sobre
        </NavLink>
      </Nav>
    </Container>
  )
}
