import { useState } from "react";

export const useCounter = ({
    initialValue,minValue,maxValue
  }) => {
   
    
    const[count,setCount]=useState(initialValue)

    const incCount=(x)=>{
       
        if(x){
            if(count+x<=maxValue)
            setCount(count+x)
        }
        else{
            if(count+1<=maxValue)
            setCount(count+1)
        }
    }

    const decCount=(x)=>{
       
        if(x){
            if(count-x>=minValue)
            setCount(count-x)
        }
        else{
            if(count-x>=minValue)
            setCount(count-1)
        }
    }

    return{count,incCount,decCount}

  };
