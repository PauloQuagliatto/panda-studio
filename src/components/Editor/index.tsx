import { useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import { CustomToolbar, modules, formats } from './CustomToolbar'
import 'react-quill/dist/quill.snow.css'
import './styles.css'

export function Editor() {
  const editorRef = useRef(null)
  const [value, setValue] = useState('');

  function handleChange(v: any) {
    setValue(v);
  }
  function getHighlightedText() {
    const quill = editorRef.current.getEditor()
    const selection = quill.getSelection()
    const text = quill.getText()
    console.log(text[selection.index, selection.length])
  }
  return (
    <>
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          ref={editorRef}
          theme="snow"
          value={value}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
        />
      </div>
      <button onClick={getHighlightedText}>Vai</button>
    </>
  )
}


