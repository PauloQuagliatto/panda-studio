import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  '.tooltip': {
    position: 'relative',
    display: 'inline-block',
    borderBottom: '1px dotted black'
  },

  '.tooltip .tooltiptext': {
    visibility: 'hidden',
    width: 120,
    backgroundColor: '#555',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 6,
    padding: '5px 0',
    position: 'absolute',
    zIndex: 1,
    bottom: '125%',
    left: '50%',
    marginLeft: -60,
    opacity: 0,
    transition: 'opacity 0.3s',

    '&:.tooltiptext&:after': {
      content: "",
      position: 'absolute',
      top: '100 %',
      left: '50%',
      marginLeft: -5,
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: '#555 transparent transparent transparent'
    },

    '&.tooltip&:hover.tooltiptext': {
      visibility: 'visible',
      opacity: 1
    }
  }
});
