import { styled } from '@/styles'

export const OverlayContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,
  width: '100%',
  height: '100%',
  backgroundColor: '$background-overlay',
  visibility: 'hidden',
  '&:hover': {
    visiblitiy: 'visible',
  }
})
