import { createTheme } from '@mui/material/styles';

const themeColors = {
  colors: {
    hurricane: '#938C8C',
    bg: '#fcfcfc',
    textLight: 'red',
    grey1: '#8A8484',
    grey2: '#33918B',
    grey3: '#6C6E74',
    grey4: '#669D9D',
    grey5: '#545151',
    grey6: '#9F9B9B',
    grey8: '#B7AEAE',
    grey7: '#928E8E',
    grey9: '#696666',
    grey10: '#B7B3B3',
    grey11: '#FFFDFD',
    grey12: '#969090',
    grey13: '#CAC0C0',
    value1: '#000000',
    value2: '#FFFBFB',
    value3: '#211F1F',
    value4: '#222222',
    value5: '#FCFFFF',
    value6: '#A7A1A1',
    value7: '#CFC8C8',
    value8: '#C6C1C1',
    value9: '#BEBABA',
    primary: '#449297',
    textDefault: '#ffffff',
    bg1: '#7A7878',
    bg2: '#7D7979',
    bg3: '#449297',
    bg4: '#968F8F',
    bg5: '#847F7F',
    bg6: '#888484',
    bg7: '#D9D9D9',
    bg8: '#BAB5B5',
    bg9: '#F5F7F4',
    green1: '#33908B',
    colorBlur: 'rgba(255, 255, 255, 0.9)',
    colorHoverGreen: 'rgba(45, 96, 99, 0.12)',
    boulder: '#797676',
    bg10: '#837F7F',
    bg11: '#DDDCDC',
    bg12: '#C9C5C5',
    color1: '#B9B5B5',
    bg13: '#EAEAEA',
    hurricane2: '#827777',
    rumSwizzle: '#F4F9E6',
    redhook: '#FE0101',
    woodsmoke: '#171D1C',
    porcelain: '#E4EAE9',
    porcelain1: '#F8FAFA',
    porcelain1_60: 'rgb(248 250 250 / 60%)',
    apple: '#64B749',
    edward: '#A8B0B0',
    abbey: '#525858',
    cornflowerBlue: '#2D6063',
    valencia: '#D34343',
    forgetMe: '#FFF2EE',
  },
} as const;

const themeFonts = {
  fonts: {
    poppinsRegular: 'Poppins-Regular',
    poppinsMedium: 'Poppins-Medium',
    poppinsBold: 'Poppins-Bold',
    Koulen: 'Koulen',
  },
} as const;

// Create a theme instance.
const theme = createTheme({
  ...themeColors,
  ...themeFonts,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1188,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: themeColors.colors.bg3,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: themeColors.colors.valencia,
    },
  },
  typography: {
    fontFamily: "'Poppins-Regular', 'Arial', 'sans-serif'",
    subtitle1: {
      color: themeColors.colors.bg3,
      fontFamily: themeFonts.fonts.poppinsBold,
      fontSize: 36,
      lineHeight: '60px',
    },
    subtitle2: {
      letterSpacing: '0.4px',
      color: themeColors.colors.edward,
      fontSize: 12,
      lineHeight: '20px',
    },
  },
});

export default theme;
