import Link from 'next/link'
import Image from 'next/image'

import pandaImage from '@/assets/panda-red.png'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <Link href="#">
          Home
        </Link>
        <Link href="#">
          Biblioteca
        </Link>

        <Image src={pandaImage} alt="panda-logo" />

        <Link href="#">
          Contate-nos
        </Link>
        <Link href="#">
          Sobre
        </Link>
      </nav>
    </Container>
  )
}
