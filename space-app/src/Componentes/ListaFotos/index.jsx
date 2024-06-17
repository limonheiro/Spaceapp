import styled from "styled-components"

const ListaFotos = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: flex-start;
    padding: 0;
    gap: 24px;
`

export default ListaFotos