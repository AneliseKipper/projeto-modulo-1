import React from 'react'


export default function CuponFiscal({cupon}) {

  
let soma = 0;
 cupon.forEach(element => {
  console.log(element)
  if(element){
    if(element.op=='+'){
      soma +=element.qtde *element.preco
    }else{
      soma -=element.qtde *element.preco
    }


  }
 });


  return (
    <>
    <h3>
      Cupom Fiscal 
    </h3>

    <table style={{textAlign:'left',width:'100%', fontSize:'xsmall'}}>
    <thead><tr>
          <th>op</th>
          <th>cód</th>
          <th>produto</th>
          <th>preço unit</th>
          <th>qtde</th>
          <th>subtotal</th>
          </tr></thead>
      <tbody>

      
        {cupon.map((p,i)=>{
          return(
            <tr key={i}>
              <td>{p.op}</td>
              <td>{p.codigo}</td>
              
              <td>{p.descricao}</td>
              <td>{p.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
              <td>{p.qtde}</td>
              <td>{(p.preco * p.qtde).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
            </tr>
          )
        })
        }
      </tbody>
      <tfoot style={{fontSize:'18px',fontWeight:'bold'}}>
        <tr>
          <th colSpan={6}><br></br></th>
        </tr>
        <tr>
            <th colSpan={5} scope="row" align='right'>Total...</th>
            <td colSpan={1}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
.format(soma) }</td>
        </tr>
    </tfoot>
    </table>

    </>
  )
}