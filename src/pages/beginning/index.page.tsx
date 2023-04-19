import { CaretRight, ChartLineUp } from 'phosphor-react'
import { Sidebar } from '../components/sidebar'
import {
  BeginningContainer,
  BeginningMain,
  BookDataContainer,
  Container,
  PopularBooksContainer,
} from './styles'
import { LastRating } from './components/lastRating'
import { Card } from '../components/card'
import Image from 'next/image'

import { StarRating } from '../components/starRating'
import { library } from '../utils/booksData'

const popularBooks = library.slice(0, 5)

export default function Beginning() {
  return (
    <Container>
      <Sidebar />
      <BeginningContainer>
        <BeginningMain>
          <h1>
            <ChartLineUp />
            Início
          </h1>
          <p>Avaliações mais recentes</p>
          <LastRating />
          <LastRating />
          <LastRating />
          <LastRating />
          <LastRating />
          <LastRating />
        </BeginningMain>

        <PopularBooksContainer>
          <p>
            Livros populares
            <a href="#">
              Ver todos
              <CaretRight weight="bold" />
            </a>
          </p>

          {popularBooks.map((book, i) => {
            return (
              <Card style={{ display: 'flex', gap: '20px' }} key={i}>
                <Image width={64} height={94} src={book.imageUrl} alt="" />
                <BookDataContainer>
                  <h3>{book.title}</h3>
                  <span>{book.author}</span>
                  <StarRating amountOfStars={4} />
                </BookDataContainer>
              </Card>
            )
          })}
        </PopularBooksContainer>
      </BeginningContainer>
    </Container>
  )
}
