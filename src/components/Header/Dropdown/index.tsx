import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CaretDown } from 'phosphor-react'

import { NavLink } from '../styles'
import { DropdownTrigger, DropdownTriggerContent } from './styles'

type DropdownProps = {
  isActive: boolean
}
export function Dropdown({ isActive }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownTrigger asChild>
        <DropdownTriggerContent>
          Biblioteca
          <CaretDown size={20} />
        </DropdownTriggerContent>
      </DropdownTrigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item onSelect={() => setIsOpen(false)}>
            <NavLink href='novel' className={isActive ? 'active' : ''}>
              Novels
            </NavLink>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
