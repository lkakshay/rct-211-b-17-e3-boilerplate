import { useEffect, useState } from "react";

const color=['red', 'yellow', 'orange', 'green']
const sizes=["sm", "md", "lg", "xl"]
const variant=["solid", "ghost", "outline"]

export const Button = ({ colorScheme , variant, size }) => {

  const [style,setStyle]=useState({
    backgroundColor:"white",
    padding:"20px",
    border:"1px solid black",

    
  })
 

  const check=(x,arr)=>{
    let a =false
    
    arr.forEach((e)=>{
      if(e===x){
        
        a= true
      }
    })
    

    if(a)
    return true

    else
    return false
  }
  

  const setSize=(x)=>{
    if(x==="sm")
    setStyle({...style,padding:"10px"})

    if(x==="lg")
    setStyle({...style,padding:"30px"})

    if(x==="xl")
    setStyle({...style,padding:"40px"})

  }
 


 

  
useEffect(()=>{
  if(colorScheme){

  if(check(colorScheme,color))
  setStyle({...style,backgroundColor:colorScheme})
  
  else
  setStyle({...style,backgroundColor:"white"})
  } 

},[colorScheme])


useEffect(()=>{
  if(size){
    if(check(size,sizes))
    setSize(size)
    
  else
   setStyle({...style,padding:"20px"})
  }
},[size])
console.log(style)


  return <button style={style} >
    
  </button>;
};



