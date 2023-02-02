import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

export function TinyReaderPage() {
  const [page, setPage] = useState(null)

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
