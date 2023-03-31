import { CardContainer } from './styles'

interface CardProps {
  size: 'sm' | 'lg'
}

export function Card({ size }: CardProps) {
  return <CardContainer size={size} />
}
