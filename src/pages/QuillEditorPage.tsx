import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { db } from '../lib/firebase'

export function QuillEditorPage() {
  const [value, setValue] = useState('')

  async function salvar() {
    await setDoc(doc(db, "fukushu", "teste-quill"), {
      title: "TESTE DO QUILL",
      subtitle: "microteste",
      body: value
    })
  }

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button onClick={salvar}>Salvar</button>
    </>
  )
}
