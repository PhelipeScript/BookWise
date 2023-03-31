import { ChartLineUp } from 'phosphor-react'
import { Sidebar } from '../components/sidebar'
import { BeginningContainer, BeginningMain, Container } from './styles'
import { Card } from '../components/card'

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
          <Card size="lg"></Card>
        </BeginningMain>

        <aside>
          <h1>Teste</h1>
        </aside>
      </BeginningContainer>
    </Container>
  )
}
