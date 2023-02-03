import { useState } from 'react'
import { doc, DocumentData, getDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

export function TinyReaderPage() {
  const [page, setPage] = useState<DocumentData | undefined>(undefined)

  async function getPageData() {
    const res = await getDoc(doc(db, "fukushu", "teste-quill"))

    setPage(res.data())
  }
  return (
    <div>
      Tiny  Reader Page
      {page}
    </div>
  )
}
