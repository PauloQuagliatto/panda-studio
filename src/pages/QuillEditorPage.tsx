import { doc, setDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

import { Editor } from '../components/EditorJS/Editor'
import { CustomTooltip } from '../components/CustomTooltip'

export function QuillEditorPage() {
  async function salvar() {
    await setDoc(doc(db, "fukushu", "teste-quill"), {
      title: "TESTE DO QUILL",
      subtitle: "microteste",
      body: ''
    })
  }

  return (
    <>
      <Editor />
    </>
  )
}
