import { styled } from '@/styles'

export const Container = styled('div', {
  width: '100%',
  padding: '14px 11px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$black-light',
  border: '2px solid',
  borderColor: '$purple-darker',
  borderRadius: '8px',
  '&:focus-within': {
    borderColor: '$purple-dark'
  }
})

export const Input = styled('input', {
  background: 'none',
  color: '$white-dark',
  border: 'none',
  '&:focus': {
    outline: 'none'
  }
})
