import ptBR from 'date-fns/locale/pt-BR'
import {
  doc,
  getDoc
} from 'firebase/firestore'

import { firestore } from '@/lib/firebase'
import { Container } from '@/styles/pages/novelReader'
import { format } from 'date-fns'

import { Novel } from '@/types'

type NovelReaderProps = {
  novel: Novel
}

export default function NovelReader({ novel }: NovelReaderProps) {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: novel.body }} />
    </Container>
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
