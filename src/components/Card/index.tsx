import { ReactNode } from 'react'

import { Overlay } from './Overlay'

import { CardContainer } from './styles'

type TCard = {
  children: ReactNode
}

export function Card({ children }: TCard) {
  return (
    <CardContainer>
      <Overlay />
      {children}
    </CardContainer>
  )
}
