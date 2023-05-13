import NextLink from 'next/link'

import { styled } from '..'

export const Link = styled(NextLink, {
 textDecoration: 'none',
 '&:hover': {
      color: '$white-dark'
 }
})
