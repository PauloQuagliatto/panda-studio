import { ReactNode } from 'react'

import { CardContainer } from './styles'

type TCard = {
  children: ReactNode
}

export function Card({ children }: TCard) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}
