import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray-800',
    color: '$gray-200',
    fontSize: '$md',
    '-webkit-font-smoothing': 'antialiased',
  },

  '@media(max-width: 600px)': {
    html: {
      fontSize: '87.5%',
    },
  },
})
