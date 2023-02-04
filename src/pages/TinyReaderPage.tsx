import { useEffect, useState } from 'react'
import { doc, DocumentData, getDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

export function TinyReaderPage() {
  const [page, setPage] = useState<DocumentData | undefined>(undefined)

  async function getPageData() {
    const res = await getDoc(doc(db, "fukushu", "teste-tiny"))

    setPage(res.data())
  }

  useEffect(() => {
    getPageData()
  }, [])

  return (
    <div>
      {page ? <>
        <h1>{page.title}</h1>
        <h2>{page.subtitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </> : null}
    </div>
  )
}
