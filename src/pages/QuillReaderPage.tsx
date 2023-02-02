import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

export function QuillReaderPage() {
  const [page, setPage] = useState(null)
  async function getPageData() {
    const res = await getDoc(doc(db, "fukushu", "teste-quill"))

    setPage(res.data())
  }
  return (
    <div>
      Quill Reader Page
      {page}
    </div>
  )
}
