import React, { useEffect, useState } from 'react'


export default function Produtos({produtos}) {
  // console.log (produtos);
  
  return (
    <>
    <h3 >
        Produtos
    </h3>

    <table style={{textAlign:'left'}}>
      <tbody>
        
 
        {
          produtos.map((p,i)=>{  
          return(
            <tr key={i}>
              <td>{p.codigo}-</td>   
              <td>{p.descricao}&nbsp;-&nbsp;</td>
              <td>{p.preco.toFixed(2)}</td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
    </>
  )
}
