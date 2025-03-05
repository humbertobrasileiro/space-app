import styled from 'styled-components'
import CampoTexto from '../CampoTexto'
import Banner from '../Banner'

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;    
  }
`

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="logo da página" />
      <CampoTexto />
      <Banner />
    </HeaderEstilizado>
  )
}

export default Cabecalho