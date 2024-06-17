import styled from "styled-components"
import Icon from "../Icon"
import facebookSVG from '/imagens/sociais/facebook.svg'
import XSVG from '/imagens/sociais/twitter.svg'
import instagramSVG from '/imagens/sociais/instagram.svg'

const RodapeContainer = styled.footer`
    background: #04244F;
    display: flex;
    gap: 34px;
    img{
        padding: 24px 0px 24px 0px;
    }
    :first-child{
        padding-left: 24px;
    }
    :last-child{
        color: #fff;
        align-self: center;
        flex-grow:1;
        text-align: right;
        padding-right: 24px;
        strong{
            padding: 0;
        }
    }
`

export const Rodape = () => {
    return (
        <RodapeContainer >
            <Icon size={'32'} src={facebookSVG}/>
            <Icon size={'32'} src={XSVG}/>
            <Icon size={'32'} src={instagramSVG}/>
            <p>
            Desensolvido por <strong>Nicolas T.</strong>
        </p>
        </RodapeContainer>
        
    )
}
