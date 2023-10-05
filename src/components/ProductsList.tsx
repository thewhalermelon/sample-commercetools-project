import React from 'react';
import { fetchProducts } from '../services/commercetools';

const ProductsList: React.FC = () => {
  const [products, setProducts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  console.log('product: ', products);

  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.name['en-US']}</h2>
          {/* <p>{product.description.en}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
