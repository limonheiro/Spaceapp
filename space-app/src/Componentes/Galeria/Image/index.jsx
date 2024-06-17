import styled from "styled-components"
import favorito from '/icones/favorito.png'
import favoritoAtivo from '/icones/favorito-ativo.png'
import expandir from '/icones/expandir.png'
import Icon from "../../Icon"
import { useContext } from "react"
import MyContext from "../../../Context"

const FigureGaleria = styled.figure`
    display: flex;
    flex-direction: column;
    width: ${props => props.$expandida ? '1156px' : '448px'};
    max-width: 100%;
    border-radius: 20px 20px 20px 20px;
    background-color: #001634;
    margin: 0;    
    >img{
      max-width: 100%;
      max-height: 740px;
      border-radius: 20px 20px 0px 0px;
      object-fit: cover;
    }
`

const CaptionGaleria = styled.figcaption`
  display: block;
  color: #fff;
  padding: 16px 21px;
  /* margin: 0; */
  h3{
    margin: 0;
    font-size: 20px;
    font-family: 'GandhiSansBold';
    line-height: 24px;
  }
  p{
    margin: 0;
    font-size: 16px;
    line-height: 19px;
  }

  footer{
    display: flex;
    justify-content: space-between;
  }
`

const ContainerIcon = styled.div`
  display: flex;
  gap: 24px;
`




const Image = ({ foto, expandida = false, aoZoomSolicitado }) => {
  const { fotosGaleria, setFotosGaleria, fotoSelecionada, setFotoSelecionada } = useContext(MyContext);

  const fotoFavorita = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !fotoGaleria.favorita : fotoGaleria.favorita
      }
    }))
  }

  return (
    <>
      <FigureGaleria $expandida={expandida} >
        <img src={foto.path} />
        <CaptionGaleria>
          <h3>
            {foto.titulo}
          </h3>
          <footer>
            <p>
              {foto.path}
            </p>
            <ContainerIcon>
              <Icon
                src={foto.favorita ? favoritoAtivo : favorito}
                onClick={() => fotoFavorita(foto)}
              />

              {expandida == false ? <Icon
                src={expandir}
                onClick={() => aoZoomSolicitado(foto)} /> : ''}

            </ContainerIcon>
          </footer>

        </CaptionGaleria>
      </FigureGaleria>
    </>
  )
}

export default Image