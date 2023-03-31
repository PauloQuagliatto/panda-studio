import Link from 'next/link'
import Image from 'next/image'
import * as DropDownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '@/styles'

export const Container = styled('header', {
  width: '100%',
  marginBottom: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$black-normal'
})

export const Nav = styled('nav', {
  maxWidth: '1216px',
  display: 'flex',
  gap: '181px',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const StyledImage = styled(Image, {
  width: '108px',
  height: 'auto'
})

export const NavLink = styled(Link, {
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$white-dark',
  transition: '.2s ease-out',
  textDecoration: 'none',
  '&:hover': {
    color: '$purple-dark',
    textDecoration: 'underline'
  },
  '&.active': {
    color: '$purple-normal'
  }
})

export const Trigger = styled(DropDownMenu.Trigger, {
  '&:hover': {
    color: '$purple-dark',
    textDecoration: 'underline'
  },
  '&.active': {
    color: '$purple-normal'
  }
})
