import React from 'react';
import { fetchProducts, fetchProductDetail } from '../../services/commercetools';

const ProductsList: React.FC = () => {
  const [products, setProducts] = React.useState<any>([]);
  // const [productDetail, setProductDetail] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      // const dataDetail = await fetchProductDetail('ecf7c643-6bc0-4494-a94e-4248b0818c52');
      // setProductDetail(dataDetail);
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  console.log('product: ', products);
  // console.log('Product detail: ', productDetail);

  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.name['en-US']}</h2>
          {/* <pre>{JSON.stringify(productDetail, null, ' ')}</pre> */}
          {/* <p>{product.description.en}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
