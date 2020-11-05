import React, { useEffect, useState } from 'react'
import { CartItems } from '../CartItems'
import { IproductInfo } from '../ProductInfo/ProductInfo'

interface Props{
   cartInfo:Array<IproductInfo>,
   updateTotal?:(subtot:number)=>void,
   total:number
}

export const Cart:React.FC<Props>=(props:Props)=>{
   return(
       <div>
           <h1>Cart-{props.cartInfo.length}</h1>
           <div>
               {
                   props.cartInfo?.map(ele=>{
                       return(
                           <div key={ele.id}>
                               <CartItems name={ele.name} price={ele.price} quantity={ele.quantity} rating={ele.rating} updateTotal={props.updateTotal} total={props.total}/>
                            </div>
                       )
                   })
               }
           </div>
       </div>
   )
}