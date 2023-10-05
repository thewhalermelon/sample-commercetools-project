import { Grid, styled } from '@mui/material';
import React from 'react';

import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../services/commercetools';

type ProjectItem = {
  name: string;
  mediaList: string;
  location: string;
};

const listProjects = [
  {
    name: 'long',
    mediaList: '/images/image1.jpg',
    location: 'hanoi',
  },
  {
    name: 'long2',
    mediaList: '/images/image2.jpg',
    location: 'hanoi2',
  },
  {
    name: 'long3',
    mediaList: '/images/image3.jpg',
    location: 'hanoi2',
  },
  {
    name: 'long3',
    mediaList: '/images/image4.jpg',
    location: 'hanoi2',
  },
  {
    name: 'long3',
    mediaList: '/images/image3.jpg',
    location: 'hanoi2',
  },
  {
    name: 'long3',
    mediaList: '/images/image1.jpg',
    location: 'hanoi2',
  },
];

const StyledPage = styled('div')(({ theme }: any) => ({
  display: 'flex',
  gap: '24px',
  background: theme.colors.textDefault,
  borderRadius: '10px',
  padding: '24px 32px',
}));

const StyledText = styled('h1')(({ theme }: any) => ({
  display: 'flex',
  margin: '0',
  marginBottom: '20px',
  borderBottom: '1px solid black',
}));

const SampleList = () => {
  const [products, setProducts] = React.useState<any>([]);
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
  return (
    <div>
      <div style={{ margin: '50px 100px ' }}>
        <StyledText>Sample List</StyledText>
        <Grid container spacing={6.3}>
          {products.map((item: any, index: number) => (
            <ProductCard
              key={index}
              item={products[index]}
              id={item.id}
              title={item.name['en-US']}
              image={item.masterVariant.images[0].url || ''}
              location={item.key}
            ></ProductCard>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SampleList;
