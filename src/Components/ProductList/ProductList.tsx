import React from 'react'
import styled from 'styled-components'
import { Products } from '../Product/Product'
import { IproductInfo } from '../ProductInfo/ProductInfo'

interface Props{
    list?:Array<IproductInfo>,
    updateCart?:(ele:IproductInfo)=>void
}

export const ProductListContainer=styled.div`
   display:flex;
  align-content:flex-start;
  flex-wrap:wrap;
`
export const ProductList:React.FC<Props>=(props:Props)=>{
  return(
      <ProductListContainer>
         {
             props.list?.map(prod=>{
                return(
                    <Products key={prod.id} id={prod.id} name={prod.name} price={prod.price} quantity={prod.quantity} rating={prod.rating} updateCart={props.updateCart&&props.updateCart}>
                            {prod.description&&prod.description}
                    </Products>
                )
             })
         }
      </ProductListContainer>
  )
}