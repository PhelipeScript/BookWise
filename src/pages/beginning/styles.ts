import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '232px 1fr',
  gap: '6rem',
  padding: '$5',

  '@media(max-width: 600px)': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
  },
})

export const BeginningContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
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
    fontSize: '$sm',
    lineHeight: '$base',
    marginBottom: 16,
  },
})

export const PopularBooksContainer = styled('aside', {
  maxWidth: 324,
  marginTop: 72,

  p: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 324,
    marginBottom: '$4',

    color: '$gray-100',
    lineHeight: '$base',
    fontSize: '$sm',

    a: {
      display: 'flex',
      alignItems: 'center',
      gap: '$md',

      textDecoration: 'none',
      color: '$purple-100',
      fontWeight: '$bold',
      lineHeight: '$base',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
})

export const BookDataContainer = styled('div', {
  position: 'relative',

  h3: {
    maxWidth: 200,
    maxHeight: 44,
    color: '$gray-100',
    fontSize: '$md',
    lineHeight: '$short',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  span: {
    color: '$gray-400',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  div: {
    position: 'absolute',
    bottom: 0,
  },
})
