import { useContext,  } from "react"
import styled from "styled-components"
import { HeaderContext, HeaderProvider } from "../HeaderContext/HeaderContext"
import { Button } from "../UI/Button"

export const Header = ()=>{
    const {click , color , click2 , color2 }=useContext( HeaderContext) 

    return(
        <HeaderProvider>
            <StyledHeader>
            <Button onClick={()=> click(document.body.style.background =color)}> Дневная тема </Button>
            <Button onClick={()=> click2(document.body.style.background = color2)} > Ночная тема </Button>
        </StyledHeader>
        </HeaderProvider>
        
    )
}

const StyledHeader = styled.header`
    background-color: darkblue;
    padding: 0.7rem;
    padding-left: 35rem;
    
`