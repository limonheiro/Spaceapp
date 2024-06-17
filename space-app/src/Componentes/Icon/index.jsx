import styled from "styled-components"

const Icon = styled.img`
  width: ${(props) => props.size ? props.size+'px' : '24px'};
  height: ${props => props.size ? props.size+'px' : '24px'};;
  cursor: pointer;
  display: flex;
  align-self: flex-end;
`
export default Icon