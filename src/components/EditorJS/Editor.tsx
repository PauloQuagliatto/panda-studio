import EditorJS from '@editorjs/editorjs';
import { configuration } from "./configuration";


export function Editor() {
  const editor = new EditorJS(configuration);

  async function onSave() {
    try {
      const outputData = await editor.save()
      console.log(outputData)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <button onClick={onSave}>AAAAAAAAAAAA</button>
      <div id="editorjs" style={{ border: "1px solid #000", width: "80%" }}></div>
    </div>
  )
}
