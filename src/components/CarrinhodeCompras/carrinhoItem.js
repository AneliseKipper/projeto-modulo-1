import React from 'react'


export default function CarrinhoItem({produto,remover}) {
  return (
    <>
        <div style={{'float':'left', 'margin':'5px','paddingLeft':'10px'}}>
        <img src="https://random.imagecdn.app/70/80"></img>
            <hr></hr>
            <span>cód:</span>{produto.codigo}<br></br>
            <b>{produto.descricao}</b><br></br>
            <span>Marca:</span>{produto.marca}<br></br>
            <span>R$</span>{produto.preco}<br></br>
            <span>qtde:</span>{produto.qtde}<br></br>
            <hr></hr>
            <button id='remove' onClick={()=> remover(produto)} >Remover</button>
        </div>
    </>
  )
}