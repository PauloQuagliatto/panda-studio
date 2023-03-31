import type { AppProps } from 'next/app'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { globalStyles } from '@/styles/global'
import { Container, ContentContainer } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
      <Footer />
    </Container>
  )
}
