import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'

import { QuillReaderPage } from './pages/QuillReaderPage'
import { QuillEditorPage } from './pages/QuillEditorPage'
import { TinyReaderPage } from './pages/TinyReaderPage'
import { TinyEditorPage } from './pages/TinyEditorPage'


export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='quill' element={<QuillEditorPage />} />
        <Route path='quill/reader' element={<QuillReaderPage />} />
        <Route path='tiny' element={<TinyEditorPage />} />
        <Route path='tiny/reader' element={<TinyReaderPage />} />
      </Routes>
    </BrowserRouter>
  )
}
