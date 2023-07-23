import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$black-dark',
    color: '$white-normal',
    '-webkit-font-smoothing': 'antialiased'
  },

  'body, input, textarea, button, p, span': {
    fontFamily: 'Poppins',
    fontWeight: 400
  },

  button: {
    cursor: 'pointer'
  }
})
