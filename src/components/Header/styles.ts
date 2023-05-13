import Link from 'next/link'
import Image from 'next/image'
import { ComponentProps } from 'react'

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

export const Dropdown = styled('div', {
  position: 'relative',
})

export const DropdownContent = styled('div', {
  position: 'absolute',
  padding: '16px 24px',
  backgroundColor: '$purple-darker',
  borderRadius: '8px'
})

export const DropdownTrigger = styled('div', {
  display: 'flex',
  gap: '4px',
  alignItems: 'center'
})
