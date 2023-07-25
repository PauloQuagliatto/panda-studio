import { styled } from '@/styles'
import Image from 'next/image'

export const Container = styled('div', {
  width: '100%',
})

export const SubContainer = styled('div', {
  width: '90%',
  marginLeft: '38px',
  padding: '12px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '5px',
  '&:not:first-child': {
    marginTop: '1.2rem'
  }
})

export const NovelProgressContainer = styled('div', {
  width: '90%',
  padding: '12px',
  border: '1px solid $black-light',
  borderRadius: '6px',
  cursor: 'pointer',
})

export const SvgContainer = styled(Image, {
})
