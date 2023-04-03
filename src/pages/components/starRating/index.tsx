import { Star } from 'phosphor-react'
import { StarButton, StarContainer } from './styles'
import { useState } from 'react'

interface StarRatingProps {
  editable?: boolean
  amountOfStars?: number
}

export function StarRating({
  editable = false,
  amountOfStars = 0,
}: StarRatingProps) {
  const [activeStar, setActiveStar] = useState<number>(amountOfStars)

  function getRating(starNumber: number) {
    setActiveStar((state) => (state === starNumber ? 0 : starNumber))
  }

  const ratingSize = Array.from(Array(5).keys())

  return (
    <StarContainer>
      {ratingSize.map((_, i) => {
        return (
          <StarButton
            disabled={!editable}
            key={i}
            onClick={() => getRating(i + 1)}
          >
            <Star weight={i + 1 <= activeStar ? 'fill' : 'regular'} />
          </StarButton>
        )
      })}
    </StarContainer>
  )
}
