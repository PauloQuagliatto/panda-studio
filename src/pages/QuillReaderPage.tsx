import { useEffect, useState } from 'react'
import { doc, DocumentData, getDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

export function QuillReaderPage() {
  const [page, setPage] = useState<DocumentData | undefined>(undefined)
  async function getPageData() {
    const res = await getDoc(doc(db, "fukushu", "teste-quill"))

    setPage(res.data())
  }

  useEffect(() => {
    getPageData()
  }, [])

  return (
    <div>
      Quill Reader Page
      {page ? <div>page</div> : null}
    </div>
  )
}
