import { useEffect,useState } from 'react'

export default function PesquisarProdutos(props) {

  const [produtos,setProdutos] = useState([])
  const [codigo,setCodigo]  =useState();
  const [qtde,setQtde]  =useState();
 // const [carrinho,setCarrinho] = useState([{  }])

  useEffect(()=>{
    fetch('./produtos.json').then( (resp)=> resp.json()).then((data)=>{

       setProdutos(data.Produtos) 
    }).catch((er)=>{
      console.log(er)
    })
  },[])


  const addCarrinho=(event)=>{
    
      event.preventDefault()
      const prod = produtos.find((r=>r.codigo == codigo));

      if(prod==null){
        alert('Produto não encontrado')
        return;
      }
     
      props.setCarrinho( {
        codigo:prod.codigo,
        descricao:prod.descricao,
        marca:prod.marca,
        preco:prod.preco,
        qtde:Number(qtde)
      });
      //setCodigo('')
      //setQtde(0)
    //  console.table(carrinho)
  }
  return (
    <>
    <h3 >
        Pesquisar Produto 
    </h3>

    <form onSubmit={(event)=> addCarrinho(event)} >

    
    <table className='tableAdd' cellPadding={10} >
	    <tbody>
        <tr>
            <td><span>Código do produto:</span></td>
			      <td>
                <input type={'text'}  required onChange={(e)=>setCodigo(e.target.value)}></input>
            </td>
            <td><span>Quantidade:</span></td>
            <td>
            <input type={'number'}  required onChange={(e)=>setQtde(e.target.value)}></input>
            </td>
        </tr>
        <tr>
			  <td colSpan={4}>
                <button id='btnAdicionar' >ADICIONAR</button>
			  </td>
		    </tr>
 	    </tbody>
    </table>
    </form>   
    </>
  )
}
