import Box from '@mui/material/Box';
import { Grid, styled } from '@mui/material';
import React, { CSSProperties, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Pagination from 'swiper';

type Props = {
  id: string;
  title: string;
  image: string;
  location?: string;
  item: any;
};

const StyledDescribe = styled(Box)(() => ({}));

const StyledHead = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledTitle = styled(Box)(({ theme }: any) => ({
  fontSize: '16px',
  color: theme.colors.value3,
  fontFamily: theme.fonts.poppinsMedium,
  lineHeight: '24px',

  width: '195px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  display: 'block',
  overflow: 'hidden',
}));

const StyledFav = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));
const StyledFavText = styled(Box)(({ theme }: any) => ({
  fontSize: '14px',
  color: theme.colors.value4,
  marginTop: '4px',
}));

const StyledSub = styled(Box)(() => ({
  display: 'flex',
}));

const StyledTextSub = styled(Box)(({ theme }: any) => ({
  fontSize: '14px',
  // fontFamily: theme.fonts.poppinsMedium,
  color: theme.colors.grey7,
  lineHeight: '20px',
  height: '20px',

  width: '195px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  display: 'block',
  overflow: 'hidden',
}));

const StyledLine = styled(Box)(({ theme }: any) => ({
  height: '1px',
  backgroundColor: theme.colors.bg8,
  marginTop: '16px',
  marginBottom: '16px',
}));

const StyledValue = styled(Box)(({ theme }: any) => ({
  color: theme.colors.value3,
  fontFamily: theme.fonts.poppinsMedium,
  fontSize: '16px',
}));

const StyledLabel = styled(Box)(({ theme }: any) => ({
  fontFamily: theme.fonts.poppinsMedium,
  fontSize: '15px',
  color: theme.colors.edward,
}));

const StyledType = styled(Box)(({ theme }: any) => ({
  fontFamily: theme.fonts.poppinsMedium,
  fontSize: '16px',
  color: theme.colors.value1,
}));

const StyledButton = styled('button')(({ theme }: any) => ({
  width: '100%',
  borderRadius: '12px',
  backgroundColor: theme.colors.bg3,
  border: 'none',
  padding: '10px 0',
  fontSize: '16px',
  fontFamily: theme.fonts.poppinsMedium,
  marginTop: '10px',
  cursor: 'pointer',
  color: theme.colors.textDefault,
  '&:hover': {
    opacity: '0.8',
  },
}));

const StyledHeart = styled(Box)(({ theme }: any) => ({
  position: 'absolute',
  top: '12px',
  right: '0',
  marginRight: '16px',
  borderRadius: '100px',
  background: theme.colors.textDefault,
  display: 'flex',
  padding: '8px',
  zIndex: 11,
  cursor: 'pointer',
}));

const StyledSwiper1 = styled(Swiper)(({ theme }: any) => ({
  position: 'relative',
  width: '100%',
  height: '313px',
  backgroundColor: theme?.colors?.bg2,
  borderRadius: '18px',
  marginBottom: '16px',
  cursor: 'pointer',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

const ProductCard: React.FC<Props> = ({ id, image, title, location, item }) => {
  const renderChildren = useCallback(() => {
    return (
      <Grid item xs={3}>
        {/* <pre>{JSON.stringify(item, null, ' ')}</pre> */}
        <Box sx={{ position: 'relative' }}>
          <Link to={`/cardDetail/${id}`}>
            {/* <StyledSwiper1
              style={
                {
                  '--swiper-pagination-color': '#fff',
                  '--swiper-pagination-bullet-inactive-color': '#fff',
                  '--swiper-pagination-bullet-inactive-opacity': '0.5',
                  '--swiper-pagination-bullet-width': '5px',
                  '--swiper-pagination-bullet-height': '5px',
                  '--swiper-pagination-bullet-horizontal-gap': '2px',
                } as CSSProperties
              }
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className='mySwiper'
            > */}
            {/* {images.map((item, index) => (
                <StyledSwiperSlide key={index}>
                  <Image src={item.url} alt={`Image ${index}`} />
                </StyledSwiperSlide>
              ))} */}
            {/* {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      background: `#E4EAE9 url("${item}") no-repeat no-repeat center center / cover`,
                      height: '100%',
                      borderRadius: '16px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  ></Box>
                </SwiperSlide>
              ))} */}
            <Box
              sx={{
                background: `#E4EAE9 url("${image}") no-repeat no-repeat center center / cover`,
                height: '250px',
                borderRadius: '16px',
                width: '100%',
                objectFit: 'cover',
              }}
            ></Box>
            {/* </StyledSwiper1> */}
          </Link>
        </Box>
        <StyledDescribe>
          <StyledHead>
            <StyledTitle>{title}</StyledTitle>

            <StyledFav>
              <img width='18' height='18' alt='' src='/icons/star-fill.svg' loading='lazy' />
              <StyledFavText>4.91</StyledFavText>
            </StyledFav>
          </StyledHead>
          <StyledSub>
            <img width='18' height='18' alt='' src='/icons/mdi_location.svg' loading='lazy' />

            <StyledTextSub>{location}</StyledTextSub>
          </StyledSub>
          <StyledLine></StyledLine>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box
                sx={{
                  textAlign: 'left',
                }}
              >
                <StyledType>Type of Product</StyledType>
                <StyledLabel>PRICE </StyledLabel>
                <StyledValue>
                  {item.masterVariant.prices ? item.masterVariant?.prices[0]?.value.centAmount : 'none'}{' '}
                  {item.masterVariant.prices ? item.masterVariant?.prices[0]?.value.currencyCode : 'none'}
                </StyledValue>
                <StyledValue>
                  {item.masterVariant.prices ? item.masterVariant?.prices[1]?.value.centAmount : 'none'}{' '}
                  {item.masterVariant.prices ? item.masterVariant?.prices[1]?.value.currencyCode : 'none'}
                </StyledValue>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  textAlign: 'end',
                }}
              >
                <StyledType>Clothes</StyledType>
                <StyledLabel>PRODUCTS AVAILABLE</StyledLabel>
                <StyledValue
                  style={{
                    justifyContent: 'right',
                    display: 'flex',
                  }}
                >
                  11
                </StyledValue>
              </Box>
            </Grid>
          </Grid>
          {/* <Link href={link}>
            <StyledButton>BUY</StyledButton>
          </Link> */}
          <Link to={'/CardDetail'}>
            <StyledButton>BUY</StyledButton>
          </Link>
        </StyledDescribe>
      </Grid>
    );
  }, [id, image, title, location]);

  return <>{renderChildren()}</>;
};
export default ProductCard;
