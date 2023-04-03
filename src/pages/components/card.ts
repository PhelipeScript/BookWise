import { styled } from '../../../stitches.config'

export const Card = styled('div', {
  background: '$gray-700',
  borderRadius: '$md',

  '& + &': {
    marginTop: '$3',
  },

  variants: {
    size: {
      sm: {
        maxWidth: 324,
        height: 130,
        padding: '18px 20px',
      },
      lg: {
        maxWidth: 608,
        height: 280,
        padding: 24,
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
