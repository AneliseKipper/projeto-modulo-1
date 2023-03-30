import Cabecalho from './components/Cabecalho' 
import './App.css';
import Produtos from './components/Produtos';
import PesquisarProdutos from './components/PesquisarProduto';
import CuponFiscal from './components/CupomFiscal';
import Carrinho from './components/CarrinhodeCompras';
import { useEffect,useState } from 'react'

function App() {
  const [carrinhoCompras,setCarrinhoCompras] = useState([{  }])
  const [carrinhoItem,setCarrinhoItem]= useState([])
  const [cupon,setCupon] = useState([])

  useEffect(()=>{
    if(carrinhoCompras.codigo){

        if(carrinhoItem.find((r)=>r.codigo ==carrinhoCompras.codigo)!=null){
          alert('Produto já existente no carrinho, verifique!')
          return;
        }

        setCarrinhoItem(carOld => [...carOld, carrinhoCompras]);
        setCupon(carOld => [...carOld, {
          codigo:carrinhoCompras.codigo,
          descricao:carrinhoCompras.descricao,
          marca:carrinhoCompras.marca,
          preco:carrinhoCompras.preco,
          qtde:Number(carrinhoCompras.qtde),
          op:'+',

        }])
    }
  },[carrinhoCompras])

  const remover =(produto)=>{
 
    var array = [...carrinhoItem]; 
    var index = array.indexOf(produto)
    if (index !== -1) {
      array.splice(index, 1);
      setCarrinhoItem( array);
    }

    setCupon(carOld => [...carOld, {
      codigo:produto.codigo,
      descricao:produto.descricao,
      marca:produto.marca,
      preco:produto.preco,
      qtde:Number(produto.qtde),
      op:'-',

    }])

  }

  return (
    <div className="App">
      
      <Cabecalho/>
      <div id="produtos" className='divMain'>
        <Produtos />

      </div>
      <div id="pesquisar" className='divMainPesquisar'>
       
        <PesquisarProdutos setCarrinho={setCarrinhoCompras} />

        <Carrinho carrinho={carrinhoItem} remover={remover} />

      </div>
      <div id="cupon" className='divMainCupon'>
        <CuponFiscal cupon={cupon} />

      </div>

     
      
    </div>
  );
}

export default App;

