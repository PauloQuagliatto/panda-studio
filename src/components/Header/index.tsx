import { useRouter } from 'next/router'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CaretDown } from 'phosphor-react'

import { ROOT_ROUTES } from './rootRoutes'

import pandaImage from '@/assets/panda-red.png'

import { Container, Nav, NavLink, StyledImage } from './styles'

export function Header() {
  const route = useRouter()
  console.log(route.basePath)

  return (
    <Container>
      <Nav>
        <NavLink href="/" className={`${route.pathname === ROOT_ROUTES.HOME ? 'active' : ''}`}>
          Home
        </NavLink>
        <NavLink href="#" className={`${route.pathname === ROOT_ROUTES.NOVEL ? 'active' : ''}`}>
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
                  <NavLink href='novel' className={`${route.pathname === ROOT_ROUTES.NOVEL ? 'active' : ''}`}>
                    Novels
                  </NavLink>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </NavLink>

        <StyledImage src={pandaImage} alt="panda-logo" />

        <NavLink href="/contact" className={`${route.pathname === ROOT_ROUTES.CONTACT ? 'active' : ''}`}>
          Contate-nos
        </NavLink>
        <NavLink href="/about" className={`${route.pathname === ROOT_ROUTES.ABOUT ? 'active' : ''}`}>
          Sobre
        </NavLink>
      </Nav>
    </Container >
  )
}
