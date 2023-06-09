import React from 'react'


export default function CarrinhoItem({produto,remover}) {
  return (
    <>
        <div style={{'float':'left', 'margin':'5px','paddingLeft':'10px'}}>
        
                    <hr></hr>
            <span>Cód:</span>{produto.codigo}<br></br>
            <b>{produto.descricao}</b><br></br>
            <span>Marca:</span>{produto.marca}<br></br>
            <span>Valor Unit: </span>{produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br></br>
            <span>Qtde:</span>{produto.qtde}<br></br>
            <hr></hr>
            <button id='remove' onClick={()=> remover(produto)} >Remover</button>
        </div>
    </>
  )
}