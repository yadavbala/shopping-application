import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CartItems } from '../CartItems'
import { IproductInfo } from '../ProductInfo/ProductInfo'
import { ProductListContainer } from '../ProductList/ProductList'

const CartHeading=styled.div`
display:flex;
justify-content:center;
width:100%;
margin-bottom:10px;
font-size:30px;
font-weight:600;
color:brown;
`

interface Props{
   cartInfo:Array<IproductInfo>,
   updateTotal?:(subtot:number)=>void,
   total:number
}

export const Cart:React.FC<Props>=(props:Props)=>{
   return(
       <>
    <CartHeading>Cart-{props.cartInfo.length}</CartHeading>
       <ProductListContainer>
          
             
               {
                   props.cartInfo?.map(ele=>{
                       return(
                           <React.Fragment key={ele.id}>
                               <CartItems name={ele.name} price={ele.price} quantity={ele.quantity} rating={ele.rating} updateTotal={props.updateTotal&&props.updateTotal} total={props.total}/>
                            </React.Fragment>
                       )
                   })
               }
        
       </ProductListContainer>
       </>
   )
}