import { styled } from '@mui/material';
import React from 'react';

const StyledHead = styled('div')(({ theme }: any) => ({
  background: theme.colors.edward,
  height: '80px',
  alignItems: 'center',
}));

const StyledText = styled('h1')(({ theme }: any) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  paddingTop: '20px',
}));

const Header = () => {
  return (
    <StyledHead>
      <StyledText>Commercetools Products</StyledText>
    </StyledHead>
  );
};

export default Header;
