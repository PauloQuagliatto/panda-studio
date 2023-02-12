import { useEffect, useRef, useState } from 'react'
import { CustomToolbar, modules, formats } from './CustomToolbar'
import 'react-quill/dist/quill.snow.css'
import './styles.css'
import { EditorContainer } from './styles'

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

  function changeHtml() {
    const quill = editorRef.current.getEditor()
    const selection = quill.getSelection()
  }

  useEffect(() => {
    console.log(value)
  }, [value])
  return (
    <>
      <div className="text-editor">
        <CustomToolbar />
        <EditorContainer
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
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </>

  )
}


