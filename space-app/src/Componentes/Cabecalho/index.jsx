import styled from 'styled-components'

const HeaderEstilizado= styled.header`
    padding:60px 0;
    display: flex;
    img{
      width: 212px;
    }
`

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
        <img src='imagens/logo.png'/>
    </HeaderEstilizado>
  )
}


export default Cabecalho
