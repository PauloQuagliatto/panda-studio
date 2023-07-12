import { GetServerSideProps } from 'next'
import { collection, getDocs, query, where } from 'firebase/firestore'

import { firestore } from '@/lib/firebase'

import { Container } from '@/styles/pages/novel'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type NovelProps = {
  novelItems: any
}

export default function Novel({ novelItems }: NovelProps) {
  return (
    <Container>
      {novelItems.map((item:any) => <p key={item.id}>{item.title}</p>)}
    </Container>
  )
}

export async function getServerSideProps<GetServerSideProps>(context: any) {
  const novelName = context.params.name

  const novelQuery= query(collection(firestore, 'novels'), where('name', '==', novelName))
  const snapshots = await getDocs(novelQuery)

  const novelItems = snapshots.docs.map((doc) => {
    const { createdAt, updatedAt } = doc.data()
    const newCreateTime = !!createdAt ? format(createdAt.toDate(), 'dd/MM/yyyy', { locale: ptBR }) : null
    const newUpdateTime = !!updatedAt ? format(updatedAt.toDate(), 'dd/MM/yyyy', { locale: ptBR }) : null

    return {
      ...doc.data(),
      id: doc.id,
      createdAt: newCreateTime,
      updatedAt: newUpdateTime
    }
  })

  return {
    props: {
      novelItems
    }
  }
}
