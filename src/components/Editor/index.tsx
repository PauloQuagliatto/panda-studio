import { useRef, useState } from 'react'
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
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </>

  )
}


