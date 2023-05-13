import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '@/styles'

export const DropdownTrigger = styled(DropdownMenu.Trigger, {
  '&:hover': {
    color: '$purple-dark',
    textDecoration: 'underline',
    'data-state': true
  },
  '&.active': {
    color: '$purple-normal'
  },
})

export const DropdownTriggerContent = styled('div', {
  display: 'flex',
  gap: '4px',
  alignItems: 'center'
})
