import { useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { Container, Input } from './styles'

export function SearchInput() {
  const [inputValue, setInputValue] = useState('')

  return (
    <Container>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <MagnifyingGlass />
    </Container>
  )
}
