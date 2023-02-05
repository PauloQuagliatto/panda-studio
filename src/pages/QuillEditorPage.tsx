import { useEffect, useRef, useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { db } from '../lib/firebase'


const modules = {
  toolbar: {
    container: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['link', 'image']
    ]
  },
  clipboard: {
    matchVisual: false
  }
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block'
]

export function QuillEditorPage() {
  const editorRef = useRef(null)
  const [value, setValue] = useState('')
  const [images, setImages] = useState([])

  async function salvar() {
    await setDoc(doc(db, "fukushu", "teste-quill"), {
      title: "TESTE DO QUILL",
      subtitle: "microteste",
      body: value
    })
  }

  useEffect(() => {
    console.log(editorRef.current)
  }, [editorRef])

  return (
    <>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />
      <button onClick={salvar}>Salvar</button>
    </>
  )
}
