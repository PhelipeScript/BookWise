import { styled } from '../../../../../stitches.config'

export const Header = styled('header', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  gap: '2.125rem',
  marginBottom: '$8',

  '& > div:first-child': {
    display: 'flex',
    alignSelf: 'flex-start',
    padding: '$px',
    background: '$gradient-vertical',
    borderRadius: 9999,
  },

  img: {
    borderRadius: 9999,
  },

  'div > span': {
    display: 'block',
    lineHeight: '$base',
    color: '$gray-100',
  },

  'div > span + span': {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray-400',
  },

  '& > div:last-child': {
    position: 'absolute',
    top: 0,
    right: 0,
  },
})

export const BookDataContainer = styled('div', {
  display: 'flex',
  gap: '$5',
  maxHeight: 155,

  h2: {
    color: '$gray-100',
    fontSize: '$md',
    lineHeight: '$short',
  },

  span: {
    display: 'block',
    color: '$gray-400',
    fontSize: '$sm',
    lineHeight: '$base',
    marginBottom: '$5',
  },

  p: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray-300',
    display: '-webkit-box',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
})
