import { useRouter } from 'next/router'

import { Container, SubContainer } from './styles'

type NovelContainerProps = {
  novel: any
}
export function NovelContainer({ novel }: NovelContainerProps) {
  const router = useRouter()
  return (
    <Container>
      <SubContainer>
        <p>{novel.volume}</p>
      </SubContainer>
      {novel.archs.map((archItem: any) => {
        return (
          <Container>
            <SubContainer key={archItem.chapter}>
              <p>{archItem.arch}</p>
            </SubContainer>
            {archItem.chapters.map((chapterItem: any) => {
              return (
                <Container>
                  <SubContainer
                    key={chapterItem.id}
                    onClick={() => router.push(`${chapterItem.name}/${chapterItem.id}`)}
                  >
                    <p key={chapterItem.id}>{chapterItem.title}</p>
                  </SubContainer>
                </Container>
              )
            })}
          </Container>
        )
      })}
    </Container >
  )
}
