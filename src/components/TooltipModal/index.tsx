import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

export function TootipModal() {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Nota</Dialog.Title>
          <Dialog.Description>

          </Dialog.Description>
          <Dialog.Close asChild>
            <button aria-label="Close">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root >
  )
}
