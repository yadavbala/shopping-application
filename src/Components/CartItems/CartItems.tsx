import React, { useEffect, useState } from 'react'
import { IproductInfo } from '../ProductInfo/ProductInfo'

interface Props extends IproductInfo{
  updateTotal?:(subtot:number)=>void,
  total:number
}

export const CartItems:React.FC<Props>=(props:Props)=>{
    
  useEffect(()=>{
     props.updateTotal?.(props.price*props.quantity)
  },[])
  
  return(
      <div>
              <h1>{props.name}</h1>
              <h3>{props.price}</h3>
              <p>Rating:{props.rating}</p>
              <p>Quantity:{props.quantity}</p>
              <p>subtotal:{props.price*props.quantity}</p>
              <p>total:{props.total}</p>
      </div>
  )
}