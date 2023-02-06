import { doc, setDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

import { Editor } from '../components/Editor'
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
      <button onClick={salvar}>Salvar</button>

      <CustomTooltip primaryText="x" secondaryText='Y' />
    </>
  )
}
