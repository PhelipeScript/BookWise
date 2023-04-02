import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '232px 1fr',
  gap: '6rem',
  padding: '$5',
  border: '1px solid red',

  '@media(max-width: 600px)': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
  },
})

export const BeginningContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  paddingTop: 72,

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
    gap: '$10',
    paddingTop: 0,
  },
})

export const BeginningMain = styled('main', {
  h1: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    color: '$gray-100',
    fontSize: '$2xl',
    lineHeight: '$short',
    marginBottom: '$10',

    svg: {
      color: '$green-100',
      width: 32,
      height: 32,
    },
  },

  p: {
    color: '$gray-100',
    fontSize: '$xs',
    lineHeight: '$base',
    marginBottom: 16,
  },
})
