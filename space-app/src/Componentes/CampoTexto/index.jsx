import styled from "styled-components"

const Container = styled.div`
    position: relative;

`

const Input = styled.input`
padding: 12px 16px;
  color: #BF4F74;
  font-size: 1em;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  background: transparent;
  width: 602px;
  height: 56px;
  color: #D9D9D9;
  outline: none;
  font-size: 20px;
  box-sizing: border-box;
`

const IconeLupa = styled.img`
    position: absolute;
    width: 32px;
    height: 32px;
    top: 0px;
    right: 0px;
    padding: 12px 16px;
`

const CampoTexto = ({ pesquisa }) => {
    return (
        <Container>
            <Input onChange={pesquisa} placeholder="Digite aqui" />
            <IconeLupa src="/icones/search.png" alt="icone da lupa" />
        </Container>
    )
}

export default CampoTexto