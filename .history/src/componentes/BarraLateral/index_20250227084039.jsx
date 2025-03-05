import styled from 'styled-components'
import ItemNavegacao from '../ItemNavegacao'

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao >
            <a href="#">Início</a>
          </ItemNavegacao>
          <ItemNavegacao>
            <a href="#">Mais vistas</a>
          </ItemNavegacao>
          <ItemNavegacao>
            <a href="#">Mais curtidas</a>
          </ItemNavegacao>
          <ItemNavegacao>
            <a href="#">Novas</a>
          </ItemNavegacao>
          <ItemNavegacao>
            <a href="#">Surpreenda-me</a>
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  )
}

export default BarraLateral