import { styled } from '../../../stitches.config'

export const Card = styled('div', {
  background: '$gray-700',
  borderRadius: '$md',
  transition: 'box-shadow 0.2s ease-in-out',

  '&:hover': {
    boxShadow: '0 0 0 2px transparent',
    cursor: 'pointer',
  },

  img: {
    borderRadius: '$sm',
  },

  '& + &': {
    marginTop: '$3',
  },

  variants: {
    size: {
      sm: {
        maxWidth: 324,
        height: 130,
        padding: '18px 20px',

        '&:hover': {
          boxShadow: '0 0 0 2px $colors$gray-600',
          cursor: 'pointer',
        },
      },
      lg: {
        maxWidth: 608,
        height: 280,
        padding: 24,

        '&:hover': {
          boxShadow: '0 0 0 2px $colors$gray-500',
          cursor: 'pointer',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
