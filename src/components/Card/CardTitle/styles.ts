import { styled } from '@/styles'

export const CardTitleContainer = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '88px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$background-overlay',
})

export const CardTitleText = styled('h3', {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '130%',
  color: '$white-normal',
  '&:hover': {
    color: '$white-dark'
  }
})
