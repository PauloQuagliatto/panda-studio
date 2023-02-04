import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { doc, setDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

export function TinyEditorPage() {
  const editorRef = useRef<any>(null)

  async function salvar() {
    await setDoc(doc(db, "fukushu", "teste-tiny"), {
      title: "TESTE DO TINY",
      subtitle: "microteste",
      body: editorRef.current.getContent()
    })
  }
  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 780,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={salvar}>Salvar</button>
    </>
  )
}
