import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import styled from 'styled-components'
import { Cart, ProductInfo } from './Components';
import { IproductInfo } from './Components/ProductInfo/ProductInfo';
import { ProductList } from './Components/ProductList/ProductList';
//import {IproductInfo, ProductInfo} from './Components/ProductInfo/ProductInfo'

export const MainContainer=styled.div`
  display:flex;
  flex-direction:column;
  margin:30px;
`

export const MainHeading=styled.h1`
   display:flex;
   justify-content:center;
   color:green;
`

export const ProductContext=createContext<Array<IproductInfo>>(ProductInfo)
function App() {
  const [productinfo,setproductinfo]=useState<Array<IproductInfo>>([])
  const [cart,setcart]=useState<Array<IproductInfo>>([])
  const [total,settotal]=useState<number>(0)
  let maintotal;
  const updateCart=(ele:IproductInfo):void=>{
    setcart([...cart,ele])
  }

  const updateTotal=(subtot:number):void=>{
      maintotal=total+subtot
      settotal(maintotal) 
  }

  console.log('cartinfo',cart)
console.log('total',total)

  useEffect(()=>{
    setproductinfo(ProductInfo)
  },[])
  return (
    <MainContainer>
        <MainHeading>shopping application</MainHeading>

      

        <ProductList list={productinfo} updateCart={updateCart}/>

        

        <Cart cartInfo={cart} updateTotal={updateTotal} total={total}/>
    </MainContainer>
  );
}

export default App;
