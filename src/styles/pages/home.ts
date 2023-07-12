import { styled } from '..'

export const Container = styled('main', {
  width: '100%',
})

export const NewNovelsList = styled('div', {
  width: '100%',
  marginTop: '1.2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 3fr)',
  gridGap: '12px'
})
