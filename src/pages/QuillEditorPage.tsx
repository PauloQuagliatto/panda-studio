import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export function QuillEditorPage() {
  const [value, setValue] = useState('')

  return <ReactQuill theme="snow" value={value} onChange={setValue} />
}
