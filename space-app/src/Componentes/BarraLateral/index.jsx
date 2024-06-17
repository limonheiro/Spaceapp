import styled from "styled-components"
import LinkBarraLateral from "../LinkBarraLateral" 

const ListaLinks = [
    {
        titulo:'Inicio',
        iconeAtivo:'./icones/home-ativo.png',
        iconeInativo:'./icones/home-inativo.png',
        ativo:true
    },
    {
        titulo:'Mais Vistas',
        iconeAtivo:'./icones/mais-vistas-ativo.png',
        iconeInativo:'./icones/mais-vistas-inativo.png',
        ativo:false
    },
    {
        titulo:'Mais Curtidas',
        iconeAtivo:'./icones/mais-curtidas-ativo.png',
        iconeInativo:'./icones/mais-curtidas-inativo.png',
        ativo:false
    },
    {
        titulo:'Novas',
        iconeAtivo:'./icones/novas-ativo.png',
        iconeInativo:'./icones/novas-inativo.png',
        ativo:false
    },
    {
        titulo:'Surpreenda-me',
        iconeAtivo:'./icones/surpreenda-me-ativo.png',
        iconeInativo:'./icones/surpreenda-me-inativo.png',
        ativo:false
    },
]

const ListaEstilizada = styled.ul`
    display: flex;
    gap: 28px;
    flex-direction: column;
    list-style: none;
    padding:0px;
    margin: 0px;
    width: 212px;

`

const BarraLateral = () => {
  return (
    <aside>
        <nav>
            <ListaEstilizada>
                {ListaLinks.map((lista,index) => <LinkBarraLateral 
                    key={index} 
                    iconeAtivo={lista.iconeAtivo} 
                    iconeInativo={lista.iconeInativo} 
                    titulo={lista.titulo} 
                    ativo={lista.ativo}/>)}
            </ListaEstilizada>
        </nav>
    </aside>
  )
}

export default BarraLateral