import Nav from 'react-bootstrap/Nav';
import React from 'react'

export default function Cabecalho() {
  return (
    <>
    <header className='container-cabecalho'>
        <span>
            Loja de Departamentos FuturoDev
        </span>
        
        <Nav defaultActiveKey="/Setores" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="Produtos">Produtos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Pesquisar Produto">Pesquisar Produto</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Carrinho de Compras">Carrinho de Compras</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Cupom Fiscal">Cupom Fiscal</Nav.Link>
      </Nav.Item>
    </Nav>

    </header>
    </>
  )
}
