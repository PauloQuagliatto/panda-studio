import { styled } from '@/styles'

export const Container = styled('div', {
  width: '100%',
  padding: '12px',
  '&:not:first-child': {
    marginTop: '1.2rem'
  }
})

export const SubContainer = styled('div', {
  width: '100%',
  padding: '12px',
  border: '1px solid $black-light',
  borderRadius: '6px',
  cursor: 'pointer',
  '&:not:first-child': {
    marginTop: '1.2rem'
  }
})
