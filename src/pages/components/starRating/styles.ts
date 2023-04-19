import { styled } from '../../../../stitches.config'

export const StarContainer = styled('div', {
  display: 'flex',
  gap: 3,
  width: 'fit-content',
})

export const StarButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  color: '$purple-100',

  '&:disabled': {
    cursor: 'default',
  },
})
