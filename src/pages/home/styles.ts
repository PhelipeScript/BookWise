import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  maxHeight: '100vh',
  padding: '$5',
  display: 'flex',
  alignItems: 'center',
  gap: 226,

  '& > img': {
    '@media(max-width: 700px)': {
      width: '100%',
      height: 400,
      objectFit: 'cover',
    },
  },

  '@media(max-width: 700px)': {
    flexDirection: 'column',
    gap: 50,
  },
})

export const LoginContainer = styled('div', {
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',

  div: {
    h1: {
      fontSize: '$2xl',
      lineHeight: '$short',
      color: '$gray-100',
    },

    p: {
      fontSize: '$md',
      lineHeight: '$base',
      marginBottom: '$10',
    },

    '@media(max-width: 700px)': {
      width: '100%',
    },
  },
})

export const ButtonAccess = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  width: 372,
  padding: '$5 $6',

  background: '$gray-600',
  borderRadius: '$md',

  fontSize: '$lg',
  fontWeight: '$bold',
  lineHeight: '$base',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',

  '& + &': {
    marginTop: '$4',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray-400',
  },

  '&:hover': {
    background: '$gray-500',
  },

  '&:active': {
    background: '$gray-700',
  },

  '@media(max-width: 700px)': {
    width: '85%',
  },
})
