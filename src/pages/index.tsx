import { Card } from '@/components/Card'
import { CardTitle } from '@/components/Card/CardTitle'
import { SearchInput } from '@/components/SearchInput'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Link } from '@/styles/defaults/link'

import { Container } from '@/styles/pages/home'

export default function Home() {
  const img = 'https://www.publicitarioscriativos.com/wp-content/uploads/2023/05/goku-bobs-panini.png'
  return (
    <Container>
      <div>
        <SearchInput />
      </div>
      <Card>
        <Link href='novel'>
          <BackgroundImage backgroundUrl={img} altTitle={'goku'} />
          <CardTitle title={'Goku'} />
        </Link>
      </Card>
    </Container>
  )
}
