import { Link } from 'react-router-dom'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <Link to='/quill'>Quill Editor</Link>
      <Link to='/quill/reader'>Quill Reader</Link>
    </Container>
  )
}
