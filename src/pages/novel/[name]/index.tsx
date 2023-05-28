import { GetServerSideProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'

import { firestore } from '@/services/firebase'

import { Container } from '@/styles/pages/novel'

type NovelProps = {
  novelItems: any
}

function Novel({ novelItems }: NovelProps) {
  return (
    <Container>
      {novelItems.map((item:any) => <p key={item.id}>{item.title}</p>)}
    </Container>
  )
}

export default Novel

export async function getServerSideProps<GetServerSideProps>(context: any) {
  const novelName = context.params.name

  const novelRef = collection(firestore, novelName)
  const q = query(novelRef)
  const snapshots = await getDocs(q)

  const novelItems: any[] = []

  snapshots.forEach((doc) => {
    novelItems.push({
      id: doc.id,
      ...doc.data()
    })
  })

  return {
    props: {
      novelItems
    }
  }
}
