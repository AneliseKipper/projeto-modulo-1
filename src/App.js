import { useEffect, useState } from 'react';
import Cabecalho from './components/Cabecalho' 
import Produtos from './components/Produtos';
import PesquisarProduto from './componentes/PesquisarProduto'
import CarrinhodeCompras from './components/CarrinhodeCompras'
import CupomFiscal from './componentes/CupomFiscal'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Cabecalho/>
      
    </div>
  );
}

// useEffect( () => {
//       fetch('produtos.json')
//        .then(resp => resp.json())
//         .then(Produtos => {setProdutos(Produtos);
//            setProdutos(false); 
//        } )
//         .catch(erro => console.log(erro));
//      }, []);




     
// import { useEffect, useState } from 'react';
// import ListaPersonagens from './components/ListaPersonagens';
// import CadastroPersonagem from './components/CadastroPersonagem';
// import './App.css';

// function App() {

//   const [carregando, setCarregando] = useState(true);  // loading 
//   const [personagens, setPersonagens] = useState([]);

//   useEffect( () => {
//     fetch('dados.json')
//       .then(resp => resp.json())
//       .then(dados => { 
//         setPersonagens(dados);
//         setCarregando(false); 
//       } )
//       .catch(erro => console.log(erro));
//   }, []);
  

//   if (carregando) {  // Se estiver carregando, mostrar aguarde...
//     return (<h1>Aguarde...</h1>);  
//   }

//   return (
//     <div className="App">      
//       <ListaPersonagens personagens={personagens} carregaPersonagens={setPersonagens} />
//       <CadastroPersonagem personagens={personagens} carregaPersonagens={setPersonagens} />
//     </div>
//   );
// }


export default App;
