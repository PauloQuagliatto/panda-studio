import { useState } from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  doc,
  getDoc
} from 'firebase/firestore'
import { Minus, Plus } from 'phosphor-react'

import { firestore } from '@/lib/firebase'

import {
  NovelReaderContainer,
  NovelBodyContainer,
  NovelSettingsContainer,
  FontButton,
  FontPreview
} from '@/styles/pages/novelReader'

import { Novel } from '@/types'

type NovelReaderProps = {
  novel: Novel
}

export default function NovelReader({ novel }: NovelReaderProps) {
  const [fontSize, setFontSize] = useState(16)

  function increaseFontSize() {
    setFontSize(prevState => prevState + 1)
  }

  function decreaseFontSize() {
    setFontSize(prevState => prevState - 1)
  }

  return (
    <>
      <NovelSettingsContainer>
        <FontButton onClick={increaseFontSize}>
          <Plus />
        </FontButton>
        <FontPreview css={{
          fontSize: `${fontSize}px`
        }}>A</FontPreview>
        <FontButton onClick={decreaseFontSize}>
          <Minus />
        </FontButton>
      </NovelSettingsContainer>
      <NovelReaderContainer>
        <h1>{novel.title}</h1>
        <h5>{novel.subtitle}</h5>
        <NovelBodyContainer
          css={{
            fontSize: `${fontSize}px`,
          }}
          dangerouslySetInnerHTML={{ __html: novel.body }}
        />
      </NovelReaderContainer>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const [slug] = context.params.slug

  const novelSnapshot = doc(firestore, 'novels', slug)
  const novelDoc = await getDoc(novelSnapshot)

  const { createdAt, updatedAt } = novelDoc.data()!
  const newCreateTime = !!createdAt ? format(createdAt.toDate(), 'dd/MM/yyyy', { locale: ptBR }) : null
  const newUpdateTime = !!updatedAt ? format(updatedAt.toDate(), 'dd/MM/yyyy', { locale: ptBR }) : null

  const novel = {
    id: novelDoc.id,
    ...novelDoc.data(),
    createdAt: newCreateTime,
    updatedAt: newUpdateTime
  }

  return {
    props: {
      novel
    }
  }
}
