import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductContainer } from '../Product/Product'
import { IproductInfo } from '../ProductInfo/ProductInfo'
import { ProductList } from '../ProductList'


interface Props extends IproductInfo{
  updateTotal?:(subtot:number)=>void,
  total:number
}

export const CartItems:React.FC<Props>=(props:Props)=>{
    
  useEffect(()=>{
     props.updateTotal?.(props.price*props.quantity)
  },[])
  
  return(
      <ProductContainer>
              <h1>{props.name}</h1>
              <h3>Rs.{props.price}</h3>
              <p>Rating:{props.rating}</p>
              <p>Quantity:{props.quantity}</p>
              <h3>subtotal:{props.price*props.quantity}</h3>
              <h1>total:{props.total}</h1>
      </ProductContainer>
  )
}