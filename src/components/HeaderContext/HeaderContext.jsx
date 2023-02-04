import { createContext, useEffect, useState } from "react"

    export const HeaderContext = createContext({
        color:"#7e9db8",
        color2:"#16344f"
        
    })

export const HeaderProvider = ({children})=>{

const [color , setColor]=useState("#7e9bd8")
const [color2 , setColor2] = useState ("#16344f")

    const click = color => {
     setColor(color)
    
    }
const click2 = color2 =>{
    setColor2(color2)
}
    

    useEffect(()=>{
      document.body.style.background = color
    }, [color])
    
    useEffect(()=>{
      document.body.style.background = color2
    }, [color2])
console.log(color)
console.log(color2)


    const state={
        click,
        color,
        click2,
        color2,
    }
    return(
        <HeaderContext.Provider value={state}> {children} </HeaderContext.Provider>
    )

}

    

