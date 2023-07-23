import { styled } from '..'

export const NovelReaderContainer = styled('div', {
  backgroundColor: '$background'
})

export const NovelBodyContainer = styled('div', {})

export const NovelSettingsContainer = styled('div', {
  position: 'fixed',
  right: 0,
  top: '50%',
  marginRight: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  transform: 'translate(-50%)'
})

export const FontButton = styled('button', {
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: '1px solid $purple-dark',
  borderRadius: '4px',
  color: '$purple-dark'
})

export const FontPreview = styled('p', {
  color: '$purple-dark'
})
