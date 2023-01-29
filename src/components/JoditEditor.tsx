import { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'
import { doc, setDoc } from 'firebase/firestore'

import { db } from '../lib/firebase'

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
  async function saveContent() {
    const title = 'Primeiro Coiso'
    const subttitle = 'Sub Coiso'



    try {
      await setDoc(doc(db, "fukushu", "teste"), {
        title,
        subttitle,
        body: content
      })
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
