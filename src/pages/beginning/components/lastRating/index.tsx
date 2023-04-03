import { Card } from '@/pages/components/card'
import { BookDataContainer, Header } from './styles'
import Image from 'next/image'
import { StarRating } from '@/pages/components/starRating'

import hobbit from '../../../../assets/booksCover/o-hobbit.png'

export function LastRating() {
  return (
    <Card size="lg">
      <Header>
        <div>
          <Image
            src="https://github.com/phelipescript.png"
            width={40}
            height={40}
            alt=""
          />
        </div>
        <div>
          <span>Phelipe Pereira</span>
          <span>Hoje</span>
        </div>
        <StarRating amountOfStars={4} />
      </Header>
      <BookDataContainer>
        <Image src={hobbit} width={108} height={152} alt="" />
        <div>
          <h2>O Hobbit</h2>
          <span>J.R.R. Tolkien</span>
          <p>
            Bilbo Bolseiro vive uma vida pacata no condado, como a maioria dos
            hobbits. Um dia, aparece em sua porta o mago Gandalf, o cinzento ,
            que lhe promete uma aventura como nunca antes vista. Na companhia de
            vários anões, Bilbo e Gandalf iniciam sua jornada inesperada pela
            Terra Média. Eles têm por objetivo libertar o reino de Erebor,
            conquistado há tempos pelo dragão Smaug e que antes pertencia aos
            anões. No meio do caminho encontram elfos, trolls e, é claro, a
            criatura Gollum e seu precioso anel.
          </p>
        </div>
      </BookDataContainer>
    </Card>
  )
}
