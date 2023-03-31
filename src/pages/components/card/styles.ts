import { styled } from '../../../../stitches.config'

export const CardContainer = styled('div', {
  background: '$gray-700',
  borderRadius: '$md',

  variants: {
    size: {
      sm: {
        width: 324,
        height: 130,
        padding: '18px 20px',
      },
      lg: {
        width: 608,
        height: 280,
        padding: 24,
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})