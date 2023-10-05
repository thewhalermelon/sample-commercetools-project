import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../services/commercetools';
import { Box, styled } from '@mui/material';

const StyledPage = styled('div')(({ theme }: any) => ({
  padding: '20px 100px 200px',
}));

const StyledCover = styled(Box)(({ theme }: any) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledLeft = styled(Box)(({ theme }: any) => ({
  padding: '30px 30px',
  width: '100%',
}));

const StyledRight = styled(Box)(({ theme }: any) => ({
  padding: '30px 30px',
  width: '100%',
  fontFamily: theme.fonts.poppinsMedium,
}));

const StyledTitle = styled('h1')(({ theme }: any) => ({
  lineHeight: 0,
  padding: 0,

  width: '100%',
  fontFamily: theme.fonts.poppinsMedium,
  fontSize: '35px',
}));

const StyledCategory = styled('h2')(({ theme }: any) => ({
  lineHeight: 0,
  padding: 0,
  marginTop: '50px',

  width: '100%',
  fontFamily: theme.fonts.poppinsMedium,
  color: theme.colors.woodsmoke,
}));

const StyledDescription = styled('h2')(({ theme }: any) => ({
  lineHeight: 0,
  padding: 0,
  marginTop: '50px',

  width: '100%',
  fontFamily: theme.fonts.poppinsMedium,
  color: theme.colors.woodsmoke,
  // fontSize: theme.fonts.poppinsBold,
  fontSize: '40px',
}));

const StyledAttributes = styled(Box)(({ theme }: any) => ({
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: theme.colors.porcelain,
  height: '100px',
  borderRadius: '20px',
}));

const StyledText = styled('h3')(({ theme }: any) => ({
  fontSize: theme.fonts.poppinsBold,
  color: theme.colors.bg10,
}));

const StyledButton = styled('button')(({ theme }: any) => ({
  width: '100%',
  borderRadius: '12px',
  backgroundColor: theme.colors.bg3,
  border: 'none',
  padding: '10px 0',
  fontSize: '16px',
  fontFamily: theme.fonts.poppinsMedium,
  marginTop: '50px',
  cursor: 'pointer',
  color: theme.colors.textDefault,

  '&:hover': {
    opacity: '0.8',
  },
}));

const StyledLabel = styled('label')(({ theme }: any) => ({
  color: theme.colors.woodsmoke,
  fontSize: '25px',
}));

const StyledInput = styled('input')(({ theme }: any) => ({
  marginTop: '10px',
  width: '100%',
  height: '20px',
  borderRadius: '20px',
}));

const StyledValue = styled(Box)(({ theme }: any) => ({
  color: theme.colors.value3,
  fontFamily: theme.fonts.poppinsMedium,
  fontSize: '20px',
}));

const CardDetail = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const [productDetail, setProductDetail] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadProducts() {
      const dataDetail = await fetchProductDetail(id);
      setProductDetail(dataDetail);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  console.log(productDetail.masterVariant.images[0].url);
  return (
    <StyledPage>
      <h1 style={{ borderBottom: '1px solid black' }}>Product detail</h1>
      <StyledCover>
        <StyledLeft>
          <Box
            sx={{
              background: `#E4EAE9 url("${productDetail.masterVariant.images[0].url}") no-repeat no-repeat center center / cover`,
              height: '500px',
              borderRadius: '16px',
              width: '100%',
              objectFit: 'cover',
            }}
          ></Box>
        </StyledLeft>
        <StyledRight>
          <StyledTitle>{productDetail.name['en-US']}</StyledTitle>
          <StyledCategory>Category: {productDetail.key}</StyledCategory>
          <StyledDescription>Description: </StyledDescription>
          <h3>
            {productDetail.metaDescription
              ? productDetail.metaDescription['en-US']
              : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'}
          </h3>
          <StyledAttributes>
            <div>
              <StyledText>Size: {productDetail?.masterVariant?.attributes[0]?.value?.key || 'Large'}</StyledText>
              <StyledText>Fit: {productDetail?.masterVariant?.attributes[1]?.value?.key || 'Over'}</StyledText>
            </div>
            <div>
              <StyledText>Color: {productDetail?.masterVariant?.attributes[2]?.value?.key || 'Red'}</StyledText>
              <StyledText>Length: {productDetail?.masterVariant?.attributes[3]?.value?.key || 'Over'}</StyledText>
            </div>
          </StyledAttributes>
          <StyledDescription>Price: </StyledDescription>
          <StyledValue>
            {productDetail.masterVariant.prices ? productDetail.masterVariant?.prices[0]?.value.centAmount : 'none'}{' '}
            {productDetail.masterVariant.prices ? productDetail.masterVariant?.prices[0]?.value.currencyCode : 'none'}
          </StyledValue>
          <StyledValue>
            {productDetail.masterVariant.prices ? productDetail.masterVariant?.prices[1]?.value.centAmount : 'none'}{' '}
            {productDetail.masterVariant.prices ? productDetail.masterVariant?.prices[1]?.value.currencyCode : 'none'}
          </StyledValue>

          <div style={{ marginTop: '30px' }}>
            <StyledLabel htmlFor='quantity'>Quantity:</StyledLabel>
            <StyledInput type='number' id='quantity' name='quantity' min='1' />
          </div>
          <Link to={'/'}>
            <StyledButton>BUY</StyledButton>
          </Link>
        </StyledRight>
      </StyledCover>
    </StyledPage>
  );
};

export default CardDetail;
