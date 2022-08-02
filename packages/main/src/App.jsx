import './App.css';
import React, { useEffect, useState } from 'react';
import productService from './services/product.service';
import { withSpinner } from './hocs/withSpinner.hoc';
import { ProductList as ProductListComponent } from './ProductList';

const ProductList = withSpinner(ProductListComponent);

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <ProductList products={products} isLoading={isLoading}></ProductList>
    </div>
  );
}

export default App;
