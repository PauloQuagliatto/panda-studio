import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import { JoditEditorTest } from './components/JoditEditor'
import { db } from './lib/firebase'

interface IText {
  title: string
  subtitle: string
  body: any
}

export function App() {
  const [seeText, setSeeText] = useState(false)
  const [text, setText] = useState<IText | null>(null)

  async function toggleSeeText() {
    const res = await getDoc(doc(db, "fukushu", "teste"))
    console.log(res.data())
    setText(res.data())

    setSeeText((currState) => !currState)
  }
  return (
    <div>
      {seeText ?
        <div>
          {text && <div>
            {text.title}
            {text.subttitle}
            <div
              dangerouslySetInnerHTML={{ __html: text.body }} />
          </div>
          }
        </div>

        : <JoditEditorTest />
      }

      <button onClick={toggleSeeText}>{seeText ? 'Editor' : 'Ver texto'}</button>
    </div>
  )
}
