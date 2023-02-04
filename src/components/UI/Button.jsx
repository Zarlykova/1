import styled from "styled-components"

export const Button =({children , onClick})=>{
    return (
        <StyledButton onClick={onClick}> {children} </StyledButton>
    )
}

const StyledButton = styled.button`
    background:#3366cc;
    padding: 1rem;
    border: none;
    color: white;
    font-size: 1rem;
    border-radius: 0.5rem;
   margin-left:1rem;
   cursor: pointer;
   &:hover{
    background:#5887e4;
   }
   
`


