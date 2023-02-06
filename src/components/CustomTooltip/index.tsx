import * as Tooltip from '@radix-ui/react-tooltip'

interface CustomTooltipProps {
  primaryText: string,
  secondaryText: string
}
export function CustomTooltip({ primaryText, secondaryText }: CustomTooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span>{primaryText}</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            {secondaryText}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
