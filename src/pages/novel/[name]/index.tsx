import { useRouter } from 'next/router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { firestore } from '@/lib/firebase'

import { Container } from '@/styles/pages/novel'

type NovelProps = {
  novelItems: any
}

export default function Novel({ novelItems }: NovelProps) {
  const router = useRouter()
  return (
    <Container>
      {novelItems.map((item: any) =>
        <p key={item.id} onClick={() => router.push(`${item.name}/${item.id}`)}>{item.title}</p>
      )}
    </Container>
  )
}

export async function getServerSideProps(context: any) {
  const novelName = context.params.name

  const novelQuery = query(collection(firestore, 'novels'), where('name', '==', novelName))
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
