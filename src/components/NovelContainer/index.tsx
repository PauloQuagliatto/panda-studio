import { useRouter } from 'next/router'
import Image from 'next/image'

import ListIconSmall from '@/assets/svgs/list-order-small.svg'
import ListIconBig from '@/assets/svgs/list-order-big.svg'

import { Container, NovelProgressContainer, SubContainer, SvgContainer } from './styles'
import { Sub } from '@radix-ui/react-dropdown-menu'

type NovelContainerProps = {
  novel: any
}

export function NovelContainer({ novel }: NovelContainerProps) {
  const router = useRouter()
  return (
    <Container>
      <NovelProgressContainer>
        <p>{novel.volume}</p>
      </NovelProgressContainer>
      {novel.archs.map((archItem: any, index: number) => {
        return (
          <Container key={archItem.arch}
            css={{
              width: '85%'
            }}
          >
            <SubContainer>
              <SvgContainer
                width={30}
                height={index === 0 ? 40 : 79.5}
                src={index === 0 ? ListIconSmall : ListIconBig}
                alt='list-chain-icon'
                css={{
                  marginTop: `-${(index === 0 ? 45 : 79.5) / 2}px`,
                }}
              />
              <NovelProgressContainer
                css={{
                  border: '1px solid $purple-light'
                }}
              >
                <p>{archItem.arch}</p>
              </NovelProgressContainer>
            </SubContainer>
            {archItem.chapters.map((chapterItem: any, index: number) => {
              return (
                <SubContainer>
                  <SvgContainer
                    width={30}
                    height={index === 0 ? 40 : 79.5}
                    src={index === 0 ? ListIconSmall : ListIconBig}
                    alt='list-chain-icon'
                    css={{
                      marginLeft: '60px',
                      marginTop: `-${(index === 0 ? 45 : 79.5) / 2}px`,
                    }}
                  />
                  <NovelProgressContainer
                    css={{
                      border: '1px solid $green-300'
                    }}
                    onClick={() => router.push(`${chapterItem.name}/${chapterItem.id}`)}
                  >
                    <p key={chapterItem.id}>{chapterItem.title}</p>
                  </NovelProgressContainer>
                </SubContainer>
              )
            })}
          </Container>
        )
      })}
    </Container>
  )
}
