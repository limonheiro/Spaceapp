import styled from "styled-components"
import Image from "../Image"
import IconGaleria from "../../Icon"
import IconClose from '/icones/fechar.png'

const OverLay = styled.div`
    background: #2A2733b2;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
`

const Modal = styled.dialog`
    position: fixed;
    background: transparent;
    padding: 100px 142px;
    border: 0;
    top: 0;
    z-index: 3;
`

const ButtonIcon = styled.button`
    border: 0;
    background: transparent;
    position: relative;
    bottom: 800px;
    right: 0;
    padding: 0px 0px 0px 1110px;
`




const ZoomModal = ({ foto, aoFechar }) => {
    return (

        (!!foto) && <>
            <OverLay />
            <Modal open={foto} onClose={aoFechar}>
                <Image key={'modal10'} foto={foto} expandida={foto} />
                <form method="dialog">
                    <ButtonIcon>
                        <IconGaleria src={IconClose} />
                    </ButtonIcon>
                </form>
            </Modal>
        </>


    )
}

export default ZoomModal