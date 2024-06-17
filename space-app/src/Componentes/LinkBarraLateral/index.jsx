import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 18px;
`

const Icon = styled.img`
    width: 32px;
    height: 32px;
`

const Link = styled.a`
    font-size: 24px;
    font-family: ${props => props.$ativo?'GandhiSansBold':'GandhiSansRegular'};;
    text-decoration: none;
    color:${props => props.$ativo?'#7B78E5':'#fff'};
`


const LinkBarraLateral = ({iconeAtivo,iconeInativo, titulo, ativo=false}) => {
  return (
    <Item>
        <Icon src={ativo ? iconeAtivo:iconeInativo}/>
        <Link $ativo={ativo} href='/'>
            {titulo}
        </Link>
    </Item>
  )
}

export default LinkBarraLateral