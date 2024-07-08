import React, { useEffect, useState } from "react";
import "./Styles.css";
const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.lenght === 100) setDisabled(true);
  }, []);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(count + 1)}>Load More Products</button>
        {
          disabledButton ? <p>You have reached to 100 products</p>: null
        }
      </div>
    </div>
  );
};

export default LoadMore;
