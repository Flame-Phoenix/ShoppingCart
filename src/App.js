import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import Cart from './components/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, filterProduct, sortProduct } from './actions/productActions';
import {addToCart,removeFromCart} from './actions/cartActions';



function App() {

  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.items);
  const filtered = useSelector(state => state.productReducer.filteredItems);

  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch])

  const removeFromMyCart = (product) => {
    dispatch(removeFromCart(product));
  }


  function filterProducts(event) {
    dispatch(filterProduct(products, event.target.value));
    setSort("")
  };
  const addToMyCart = (product) => {
    dispatch(addToCart(product))
  }

  const sortProducts = (event) => {
    dispatch(sortProduct(filtered, event.target.value))
    setSort(event.target.value);
  };



  return (

    <div className="grid-container">
      <header className="App-header">
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={filtered} addToCart={addToMyCart} />
          </div>
          <div className="sidebar">
            <Cart removeFromCart={removeFromMyCart}/>
          </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
};

export default App;
