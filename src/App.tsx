import React from 'react';
import './App.css';

import Header from 'component/headerComponent/Header';
import BackButton from 'component/backButton/BackButton';
import ProductDetails from 'component/productDetails/ProductDetails';
import ProductCard from 'component/productCard/ProductCard';
import ContainerFlexBetween from 'component/containerFlexBetween/ContainerFlexBetween';
import { LINKS, PRODUCTS } from 'mock.ts/product';
import ContainerFlexArround from 'component/containerFlexArround/ContainerFlexArround';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <BackButton />
        <ProductDetails />
        <ul>
          {PRODUCTS.map((product) => <li key={product.id}><ProductCard item={product} /></li>)}
        </ul>
        <ContainerFlexBetween title="Mes numéros favoris">
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
        </ContainerFlexBetween>
        <ContainerFlexArround title='Mes partenaires'>
          <li>
            <a href="">Meta</a>
            <a href="">Apple</a>
            <a href="">Microsoft</a>
            <a href="">Amazon</a>
            <a href=""></a>
            <a href=""></a>
          </li>

        </ContainerFlexArround>




      </main>

    </React.Fragment>
  )
}
     export default App;  


/* /* 
/* /* // Fragment n'est pas nécessaire dans ce cas , exemple
//  return (
//   <>
//        <Header />
//        <BackButton />
//        <ProductDetails />
  export default App; */ 
            //  */} */}
