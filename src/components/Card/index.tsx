import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Overlay } from './Overlay'

import { CardContainer } from './styles'

interface TCard extends ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, ...rest }: TCard) {
  return (
    <CardContainer {...rest}>
      <Overlay />
      {children}
    </CardContainer>
  )
}
