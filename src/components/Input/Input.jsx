import { useReducer, useState } from "react"
import styled from "styled-components"
import { Button } from "../UI/Button"

const ACTION = {
    NUMBER_CHANGE:"NUMBER_CHANGE",
    NUMBER2_CHANGE:"NUMBER2_CHANGE",
}
const  numberReducer=(state , action)=>{
     console.log(action);

     if(action.type === ACTION.NUMBER_CHANGE){
         return{
            ...state,
            value: action.payload,
        }
     }
     if(action.type === ACTION.NUMBER2_CHANGE){
         return{
            ...state,
            value: action.payload,
        }
     }
       
        
    }
   
export const Input =()=>{
    


    const [ numberState , dispatchNumber]=useReducer(numberReducer,{value:''})

    const [number2State ,dispatchNumber2]= useReducer(numberReducer,{value:''})
    


    const [plus , setPlus]=useState(numberState.value + number2State.value)
    const [minus , setMinus]=useState(numberState.value - number2State.value)
    const [multiply , setMultiply]=useState(numberState.value * number2State.value)
    const [divide , setDivide]=useState(numberState.value / number2State.value)
    

const PlusHandler =()=>{
    setPlus(numberState.value + number2State.value)
}
console.log(plus)


const MinusHandler =()=>{
    setMinus(numberState.value - number2State.value)
}
console.log(minus)



const MultiplyHandler =()=>{
    setMultiply(numberState.value * number2State.value)
}
console.log(multiply)



const DivideHandler =()=>{
    setDivide(numberState.value / number2State.value)
}
console.log(divide)

const numberChangeHandler=(e)=>{
    dispatchNumber({type:ACTION.NUMBER_CHANGE, payload: e.target.value})

}
const number2ChangeHandler =(e)=>{
    dispatchNumber2({type:ACTION.NUMBER2_CHANGE,payload:+e.target.value})
}

    return(
        <Card>
            <div>
                <label htmlFor="">1</label>
                <StyledInput 
                type="number" 
                placeholder="...."
                value={numberState.value} 
                onChange={numberChangeHandler}
                
                />
            </div>
            <div>
                <label htmlFor="">2</label>
                <StyledInput 
                type="number" 
                placeholder="...." 
                value={number2State.value}
                onChange={number2ChangeHandler}
                
                />
            </div>
          <Text> RESULT : { plus || minus || multiply || divide } </Text>
                
                <StyledButton>
                    <Button onClick={PlusHandler}>+</Button>
                    <Button onClick={MinusHandler}>-</Button>
                    <Button onClick={MultiplyHandler}>*</Button>
                    <Button onClick={DivideHandler}>/</Button>
                </StyledButton>
        </Card>
    )
}

const Card = styled.div`
   width: 35rem;
   margin-top: 7rem;
   padding: 2rem;
   color: #ffffff;
   margin-left: 25rem;
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   background-color: #7394d6;
   -webkit-box-shadow: 0px 0px 37px 21px rgba(34, 60, 80, 0.44);
-moz-box-shadow: 0px 0px 37px 21px rgba(34, 60, 80, 0.44);
box-shadow: 0px 0px 37px 21px rgba(34, 60, 80, 0.44);
`



const StyledInput = styled.input`
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    margin-top:1rem;
    margin-left: 10rem;
    

`

const Text = styled.h2`
    padding: 1rem;
    text-align: center;

`

const StyledButton = styled.div`
    text-align: center;
    padding: 1rem;
`