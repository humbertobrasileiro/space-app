import styled from 'styled-components'

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  display: flex;
  align-items: center;
  gap: 22px;
`

// eslint-disable-next-line react/prop-types
const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo: boolean = false }) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo } alt="" />
      {children}
    </ItemListaEstilizado>
  )
}

export default ItemNavegacao