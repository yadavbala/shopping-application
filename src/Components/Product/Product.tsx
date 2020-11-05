import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { IproductInfo } from '../ProductInfo/ProductInfo'

const ProductContainer=styled.div`
    display:flex;
    width:33.33%;
    flex-direction:column;
`

interface Props extends IproductInfo{
    updateCart?:(ele:IproductInfo)=>void
}

export const Products:React.FC<Props>=(props:PropsWithChildren<Props>)=>{
   const [rating,setrating]=useState<number>(props.rating)
   const [editrating,seteditrating]=useState<boolean>(false)
   const [quantity,setquantity]=useState<number>(props.quantity)
   const [editquantity,seteditquantity]=useState<boolean>(false)
   //const ratingref=useRef() as React.RefObject<HTMLInputElement>

 

 
   const toggleQuantity=():void=>{
       seteditquantity(val=>!val)
   }
   const toggleRating=():void=>{
    seteditrating(val=>!val)
}

const handleRating=(event:React.ChangeEvent<HTMLInputElement>):void=>{
    setrating(+event.target.value)
}

const handleQuantity=(event:React.ChangeEvent<HTMLInputElement>):void=>{
     setquantity(+event.target.value)
}
    const addCart=():void=>{
       const cartElements={
           id:props.id,
           name:props.name,
           price:props.price,
           quantity,
           rating
       }
       props.updateCart?.(cartElements)
    }
   return (
       <ProductContainer>
           <h1>{props.name}</h1>
          <h3>Rs.{props.price}</h3>
          {props.children &&<p>{props.children}</p>}
          {!editquantity && <p onClick={toggleQuantity}>Quantity:{quantity}</p>}
          {
              editquantity &&
              <>
              <input type='number' value={quantity} onChange={handleQuantity}/>
              <div><button onClick={toggleQuantity}>update</button></div>
              </>
          }
          {!editrating && <p onClick={toggleRating}>rating:{rating}</p>}
          {
              editrating&&
              <>
                <input type='number' min='1' max='5' value={rating} onChange={handleRating}/>
                <div><button onClick={toggleRating}>update</button></div>
              </>
          }
          <button onClick={addCart}>Add To Cart</button>
       </ProductContainer>
   )
}