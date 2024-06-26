import styled from 'styled-components'
import Titulo from '../Titulo'
import { Tags } from './Tags'
import Image from './Image'
import { Populares } from './Populares'
import ListaFotos from '../ListaFotos'

const GaleriaContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const SecaoFluida = styled.div`
    display: flex;
    flex-direction: column;
`


const Galeria = ({ fotos = [], aoFotoSolicitada, tagSelecionada }) => {
    return (
        <>
            <Tags tagSelecionada={tagSelecionada}></Tags>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>
                        Navegue pela galeria
                    </Titulo>
                    <ListaFotos>
                        {fotos.map(foto => <Image
                            aoZoomSolicitado={aoFotoSolicitada}
                            key={foto.id} foto={foto}
                        />)}
                    </ListaFotos>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria