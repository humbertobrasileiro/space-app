import styled from 'styled-components'

const ListaEstilizada = styled.ul`

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