import { useRouter } from 'next/router'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button>
                Biblioteca
                <CaretDown />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                Novels
              </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </NavLink>

        <StyledImage src={pandaImage} alt="panda-logo" />

        <NavLink href="#">
          Contate-nos
        </NavLink>
        <NavLink href="#">
          Sobre
        </NavLink>
      </Nav>
    </Container >
  )
}
