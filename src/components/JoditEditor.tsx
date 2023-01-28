import { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'

const placeholder: string = 'Teste'

export function JoditEditorTest() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config: any = {
    readonly: false,
    placeholder: placeholder || 'Start typings...'
  }

  function updateContent(newContent: any) {
    setContent(newContent)
  }

  function saveContent() {
    try {
      console.log(content)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={updateContent} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => { }}
      />
      <button onClick={saveContent}>Salvar</button>
    </>
  );
};
