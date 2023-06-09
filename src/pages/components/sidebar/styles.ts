import { styled } from '../../../../stitches.config'

export const SidebarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: 232,
  height: 924,
  background: 'linear-gradient(180deg, $purple-200 0%, $gray-700 10%);',
  borderRadius: '$md',
  padding: '$10 3rem $6',

  '@media(max-width: 600px)': {
    width: 'calc(100vw - 40px)',
    height: 140,
    padding: '$3',

    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
  },
})

export const SidebarMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '4rem',

  '@media(max-width: 600px)': {
    flexDirection: 'row',
  },
})

export const SidebarItem = styled('button', {
  all: 'unset',
  opacity: 0.5,
  color: '$gray-100',
  fontWeight: '$bold',
  lineHeight: '$base',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'pointer',

  '&:before': {
    content: '',
    width: 4,
    height: 24,
  },

  svg: {
    width: 24,
    height: 24,
  },

  variants: {
    focused: {
      true: {
        opacity: 1,
        '&:before': {
          content: '',
          width: 4,
          height: 24,
          background: '$gradient-vertical',
        },
      },
      false: {
        '&:hover, &:focus': {
          opacity: 0.8,
        },
      },
    },
  },

  defaultVariants: {
    focused: 'false',
  },
})

export const SignInButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  maxWidth: 122,
  maxHeight: 34,
  margin: '0 auto',
  padding: '$3',
  borderRadius: '$sm',
  borderTop: '2px solid transparent',
  cursor: 'pointer',

  fontWeight: '$bold',
  lineHeight: '$base',

  '&:hover, &:focus': {
    borderTop: '2px solid $gray-400',
    transition: 'border-top 0.2s ease',
  },

  '&:active': {
    opacity: '0.6',
    borderTop: '2px solid transparent',
  },

  svg: {
    color: '$green-100',
  },

  '@media(max-width: 600px)': {
    position: 'absolute',
    top: 10,
    right: 0,
  },
})
