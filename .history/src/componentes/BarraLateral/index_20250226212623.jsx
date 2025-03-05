import styled from 'styled-components'

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <li>
            <a href=''>Início</a>
            <a href=''>Teste</a>
          </li>
        </ListaEstilizada>
      </nav>
    </aside>
  )
}

export default BarraLateral