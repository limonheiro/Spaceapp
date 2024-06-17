import styled from "styled-components"
import lista from './tags.json'
import { useState } from "react"

const ContainerTags = styled.div`
    display: flex;
    flex-direction: row;
    gap: 36px;
    padding:0;
    padding-top: 56px;
    padding-bottom: 38px;

`
const TituloTag = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    align-self: center;
`

const Tag = styled.button`
    padding: 10px 8px 10px 8px;
    border: 0px;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: all 0.5s;
    background:rgba(217, 217, 217, 0.3);
    color: #fff;
    align-self: center;
    cursor: pointer;
    &:hover{
        border: 2px solid #C98CF1;
    }
`
const SecTags = styled.section`
    display: flex;
    gap: 24px;
    font-weight: 400;
`

export const Tags = ({ tagSelecionada }) => {
    return (
        <>
            <ContainerTags>
                <TituloTag>
                    Busque por Tags:
                </TituloTag>

                <SecTags>{lista.map(l => <Tag onClick={tagSelecionada} key={l.id} data-key={l.id}> {l.titulo} </Tag>)}</SecTags>
            </ContainerTags>

        </>
    )
}
