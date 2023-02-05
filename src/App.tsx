import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'

import { QuillReaderPage } from './pages/QuillReaderPage'
import { QuillEditorPage } from './pages/QuillEditorPage'


export function App() {
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
