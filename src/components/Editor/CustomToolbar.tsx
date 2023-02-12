import { Quill } from 'react-quill'
import { ChatTeardrop } from 'phosphor-react'
import { ToolbarContainer } from './styles';

function addToolTip() {
  const result = window.prompt("Digite a nota para o leitor");
  const { index, length } = this.quill.getSelection();
  const innerHtml = this.quill.root.innerHTML
  const text = this.quill.getText()
  const selectedWord = text.substring(index, index + length).trim()
  const [firstHalf, secondHalf] = innerHtml.split(selectedWord)
  const templateTooltip = `<span title="${result}" style="background-color: #F1F1F1;">${selectedWord}</span>`
  this.quill.root.innerHTML = `${firstHalf}${templateTooltip} ${secondHalf}`
  const wordEnd = index + length
  this.quill.setSelection(templateTooltip.length + wordEnd + 1);
  console.log(this.quill.root.innerHTML)
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size")
Size.whitelist = ["extra-small", "small", "medium", "large"]
Quill.register(Size, true)

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font")
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
]

Quill.register(Font, true)

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      addToolTip: addToolTip
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
}

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
  "icon"
]

export function CustomToolbar() {
  return (
    <ToolbarContainer id="toolbar">
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
      <span className="ql-formats">
        <button className="ql-script" value="super" />
        <button className="ql-script" value="sub" />
        <button className="ql-blockquote" />
        <button className="ql-direction" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
        <button className="ql-addToolTip">
          <ChatTeardrop size={24} />
        </button>
      </span>
    </ToolbarContainer>
  )
}

