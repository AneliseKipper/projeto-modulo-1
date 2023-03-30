import React, { useEffect, useState } from 'react'


export default function Produtos() {
  const [produtos,setProdutos] = useState([])

  useEffect(()=>{
    fetch('./produtos.json').then( (resp)=> resp.json()).then((data)=>{

       setProdutos(data.Produtos) 
    }).catch((er)=>{
      console.log(er)
    })
  },[])

  return (
    <>
    <h3>
        Produtos
    </h3>

    <table style={{textAlign:'left' ,fontSize: 'small' }}>
      <tbody>
        
        {produtos.map((p,i)=>{
          return(
            <tr key={i}>
              <td>{p.codigo}-</td>
              <td>{p.descricao}&nbsp;-&nbsp;</td>
              <td align='right'>R$ { p.preco.toFixed(2)} </td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
    </>
  )
}