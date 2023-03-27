import React, { useState } from 'react'
import CarrinhoItem from './carrinhoItem'

export default function Carrinho({carrinho,remover}) {
  
  
   return (
    <>
    <h3 >
        Carrinho de compras
    </h3>

    {
        carrinho.map((prod,i)=>{
            return(
                <CarrinhoItem produto={prod} key={i} remover={remover} />
            )
        })
    }
    </>
  )
}
