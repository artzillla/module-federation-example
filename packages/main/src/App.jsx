import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import productService from './services/product.service';
import { withSpinner } from './hocs/withSpinner.hoc';
import { ProductList as ProductListComponent } from './ProductList';
import Header from 'header/Header';
import Cart from 'cart/Cart';

const ProductList = withSpinner(ProductListComponent);

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [theme, setTheme] = useState('light');
  const onToggleTheme = useCallback((currentTheme) => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.body.setAttribute('color-scheme', theme);
  }, [theme]);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const data = await productService.fetchAll();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className='App'>
      <Header onToggleTheme={() => onToggleTheme(theme)}></Header>
      <ProductList products={products} isLoading={isLoading}></ProductList>
      {!isLoading && <Cart theme={theme} />}
    </div>
  );
}

export default App;
