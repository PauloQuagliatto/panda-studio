import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'

import { QuillReaderPage } from './pages/QuillReaderPage'
import { QuillEditorPage } from './pages/QuillEditorPage'
import { globalStyles } from './styles/styles'


export function App() {
  globalStyles()
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='quill' element={<QuillEditorPage />} />
        <Route path='quill/reader' element={<QuillReaderPage />} />
      </Routes>
    </BrowserRouter>
  )
}
