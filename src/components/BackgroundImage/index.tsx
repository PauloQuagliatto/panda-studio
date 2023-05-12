import { Image } from './styles'

type TBackgroundImage = {
  backgroundUrl: string
  altText: string
}

export function BackgroundImage({ backgroundUrl, altText }: TBackgroundImage) {
  return <Image height={100} width={100} src={backgroundUrl} alt={altText} />
}
