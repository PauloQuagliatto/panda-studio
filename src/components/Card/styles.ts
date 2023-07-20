import { styled } from '@/styles'

export const CardContainer = styled('div', {
  position: 'relative',
  width: '312px',
  height: '264px',
  borderRadius: '8px',
  backgroundColor: '$purple-normal',
  cursor: 'pointer',
  transition: '0.2s filter ease',
  '&:hover': {
    filter: 'brightness(0.7)'
  }
})
