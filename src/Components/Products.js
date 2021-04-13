import React from 'react';
import Cart from './Cart'
import Helmet from 'react-helmet';

const Products = () => {

  return(
    <div>
      <Helmet>
        <title>
          Products page title by Helmet
        </title>
        <meta
        name='description'
        content='Products page description by Helmet'
        />
      </Helmet>
      <h1>Section Produits</h1>
      <Cart/>
    </div>
  )
}

export default Products;