import styled from "styled-components"
import Cabecalho from "./Componentes/Cabecalho"
import CampoTexto from "./Componentes/CampoTexto"
import BarraLateral from "./Componentes/BarraLateral"
import EstilosGlobais from './Componentes/EstilosGlobais/index.jsx';
import Banner from "./Componentes/Banner";
import Galeria from "./Componentes/Galeria";
import MyContext from "./Context";
import { useEffect, useState } from "react";
import ZoomModal from "./Componentes/Galeria/ZoomModal";
import { Rodape } from "./Componentes/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const ContainerCabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  
`
const ContainerMain = styled.div`
  margin: 0 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 24px;
`
const AppContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`
const ContainerGaleria = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow:1;
  max-width:100%;
`



function App() {

  const [fotosGaleria, setFotosGaleria] = useState()
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [query, setQuery] = useState()


  const tagSelecionada = (evento) => {
    setQuery(Number(evento.target.dataset.key) === 0 ? '' : '?tagId=' + evento.target.dataset.key)
  }

  const pesquisa = (evento) => {
    // console.log(evento.target.value)
    const query = '?titulo_like=' + evento.target.value
    if (query.split('=')[1].length > 0) {
      setQuery(query)
    }else{
      setQuery('')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/fotos')
        .then(res => res.json())
        .then(data => setFotosGaleria(data))
    }, 1000);

  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/fotos?' + query)
      .then(res => res.json())
      .then(data => setFotosGaleria(data))


  }, [query])


  const aoFechar = () => {
    setFotoSelecionada(null)
  }


  return (
    <>
      <FundoGradiente>
        <AppContainer>
          <ContainerCabecalho>
            <Cabecalho />
            <CampoTexto pesquisa={pesquisa} />
          </ContainerCabecalho>
          <ContainerMain>
            <BarraLateral />
            <ContainerGaleria>
              <Banner texto={'A galeria mais completa de fotos do espaço!'} bannerImage={'/banner.jpeg'} />
              <MyContext.Provider value={{ fotosGaleria, setFotosGaleria, fotoSelecionada, setFotoSelecionada, }}>
                <Galeria
                  tagSelecionada={tagSelecionada}
                  aoFotoSolicitada={foto => setFotoSelecionada(foto)}
                  fotos={fotosGaleria}
                />
                <ZoomModal foto={fotoSelecionada} aoFechar={aoFechar} />
              </MyContext.Provider>
            </ContainerGaleria>
          </ContainerMain>
        </AppContainer>
        <Rodape />
      </FundoGradiente>
      <EstilosGlobais />
    </>
  )
}

export default App
