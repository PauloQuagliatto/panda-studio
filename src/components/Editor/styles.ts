import { styled } from '@stitches/react'
import ReactQuill from 'react-quill'

export const ToolbarContainer = styled('div', {
  borderRadius: '6px'
})

export const EditorContainer = styled(ReactQuill, {
  '.tooltip-tip': {
    visibility: 'hidden'
  }
})
