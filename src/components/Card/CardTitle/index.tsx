import { CardTitleContainer, CardTitleText } from './styles'

type TCardTitle = {
  title: string
}

export function CardTitle({ title }: TCardTitle) {
  return <CardTitleContainer>
    <CardTitleText>{title}</CardTitleText>
  </CardTitleContainer>
}
