import styled from "styled-components"
import Titulo from "../../Titulo"
import FotosPopulares from './fotos-populares.json'
import ListaFotos from "../../ListaFotos"

const SectionPopulares = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  >ul li{
    text-decoration: none;
    list-style: none;
  }
  img{
    margin: 0;
    width: 212px;
    height: 158px;
    border-radius: 20px;
    object-fit: cover;
  }
`

const BotaoPopular = styled.button`
  border: 2px solid #C98CF1;
  border-radius: 10px;
  background: transparent;
  padding: 14px 72px;
  align-self: center;
  color: #fff;
  font-family: 'GandhiSansBold';
  transition: all 1s;

  &:hover{
    border: 2px solid transparent;
    transition: all 1s;
    background-image: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);

  }
  
`

export const Populares = () => {
  return (
    <>
      <SectionPopulares>
        <Titulo >Populares</Titulo>
        <ListaFotos column>
          {FotosPopulares.map(foto => <li key={foto.id}> <img src={foto.path} alt={foto.alt} /> </li>)}
        </ListaFotos>
        <BotaoPopular>
          Ver Mais
        </BotaoPopular>
      </SectionPopulares>
    </>

  )
}
