import { useRouter } from 'next/router'
import { useState } from 'react'
import { CaretDown } from 'phosphor-react'

import { ROOT_ROUTES } from './rootRoutes'

//import { Dropdown } from './Dropdown'
import pandaImage from '@/assets/panda-red.png'

import {
  Container,
  Dropdown,
  DropdownContent,
  DropdownTrigger,
  Nav,
  NavLink,
  StyledImage
} from './styles'

export function Header() {
  const route = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  const [_, activeRoute, __] = route.pathname.split('/')

  return (
    <Container>
      <Nav>
        <NavLink href="/" className={activeRoute === ROOT_ROUTES.HOME ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink href="#" className={activeRoute === ROOT_ROUTES.NOVEL ? 'active' : ''}>
          <Dropdown
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <DropdownTrigger>
              Biblioteca
              <CaretDown size={16} />
            </DropdownTrigger>
            <DropdownContent css={{ visibility: isVisible ? 'visible' : 'hidden' }}>
              <NavLink href='novel' className={activeRoute === ROOT_ROUTES.NOVEL ? 'active' : ''}>
                Novels
              </NavLink>
            </DropdownContent>
          </Dropdown>
        </NavLink>

        <StyledImage src={pandaImage} alt="panda-logo" />

        <NavLink href="/contact" className={activeRoute === ROOT_ROUTES.CONTACT ? 'active' : ''}>
          Contate-nos
        </NavLink>
        <NavLink href="/about" className={activeRoute === ROOT_ROUTES.ABOUT ? 'active' : ''}>
          Sobre
        </NavLink>
      </Nav>
    </Container >
  )
}
