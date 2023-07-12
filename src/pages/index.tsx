import { collection, getDocs } from 'firebase/firestore'

import { Card } from '@/components/Card'
import { CardTitle } from '@/components/Card/CardTitle'
import { SearchInput } from '@/components/SearchInput'
import { BackgroundImage } from '@/components/BackgroundImage'

import { firestore } from '@/lib/firebase'

import { Container, NewNovelsList } from '@/styles/pages/home'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Home(props: any) {
  const img = 'https://www.publicitarioscriativos.com/wp-content/uploads/2023/05/goku-bobs-panini.png'
  return (
    <Container>
      <SearchInput />
      <NewNovelsList>
        {props.novels.map((novel: any) => {
          return (
            <Card key={novel.id}>
              <BackgroundImage
                backgroundUrl={img}
                altText='goku'
              />
              <CardTitle title={novel.name} />
            </Card>
          )
        })}
      </NewNovelsList>
    </Container>
  )
}

export async function getServerSideProps() {
  const novelsQuery = collection(firestore, 'novels')
  const novelsDocs = await getDocs(novelsQuery)
  const novels = novelsDocs.docs.map((doc) => {
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
      novels
    }
  }
}
