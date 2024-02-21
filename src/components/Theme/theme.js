const lightTheme = {
  palette: {
    primary: {
      light: '#FCFCFC',
      main: '#BEDBB0;',
      dark: '#0b5c15',
      darker: '#F6F6F7',
      contrastText: 'rgba(22, 22, 22, 0.1)',
      info: 'rgba(22, 22, 22, 0.5)',
      error: '#16161680',
      hint: '#16161680',
    },
    secondary: {
      main: 'rgba(22, 22, 22, 0.10)',
      light: '#BEDBB0',
      dark: '#16161680',
      info: '#121212',
      warning: '#BEDBB0',
      error: '#FFFFFF',
    },
    background: {
      default: '#F6F6F7',
      paper: '#FCFCFC',
      hint: 'rgba(22, 22, 22, 0.10)',
      disabled: '#E8E8E8',
      info: '#E8E8E8',
      warning: 'rgba(22, 22, 22, 0.10)',
      success: '#FFFFFF',
      error: '#F6F6F7',
    },
    text: {
      primary: '#161616',
      secondary: 'rgba(22, 22, 22, 0.8)',
      disabled: 'rgba(22, 22, 22, 0.5)',
      hint: '#BEDBB0',
      info: 'rgba(190, 219, 176, 0.5)',
      warning: '#BEDBB0',
      error: '#9DC888',
      success: 'rgba(22, 22, 22, 0.2)',
    },
  },
};

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      light: '#161616',
      main: '#BEDBB0',
      dark: '#1b1c21',
      darker: '#1F1F1F',
      contrastText: 'rgba(255, 255, 255, 0.1)',
      info: 'rgba(255, 255, 255, 0.5)',
      error: 'rgba(255, 255, 255, 0.5)',
      hint: '#161616',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.10)',
      light: '#BEDBB0',
      dark: '#FFF',
      info: '#121212',
      warning: '#BEDBB0',
      error: '#FFFFFF',
    },
    background: {
      default: '#1F1F1F',
      paper: '#161616',
      hint: '#121212',
      disabled: 'rgba(255, 255, 255, 0.10)',
      info: 'rgba(255, 255, 255, 0.10)',
      warning: '#121212',
      success: '#1F1F1F',
      error: '#121212',
    },
    text: {
      primary: '#FFFFFF80',
      secondary: 'rgba(255, 255, 255, 0.8)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: '#BEDBB0',
      info: 'rgba(190, 219, 176, 0.5)',
      warning: '#BEDBB0',
      error: '#9DC888',
      success: 'rgba(255, 255, 255, 0.2)',
    },
  },
};

const violetTheme = {
  palette: {
    primary: {
      light: '#FFF',
      main: '#5255BC;',
      dark: '#B8BCFD',
      darker: '#ECEDFD',
      contrastText: 'rgba(255, 255, 255, 0.1)',
      info: '#ECEDFD',
      error: '#5255BC',
      hint: '#FFF',
    },
    secondary: {
      main: 'rgba(22, 22, 22, 0.10)',
      light: '#BEDBB0',
      dark: '#FFF',
      info: '#FFFFFF',
      warning: '#B8BCFD',
      error: '#161616',
    },
    background: {
      default: ' #ECEDFD',
      paper: '#FFF',
      hint: '#B8BCFD',
      disabled: '#FFFFFF',
      info: '#B8BCFD',
      warning: '#FFFFFF',
      success: '#FFFFFF',
      error: '#5255BC',
    },
    text: {
      primary: '#161616B2',
      secondary: 'rgba(22, 22, 22, 0.8)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: '#5255BC',
      info: 'rgba(82, 85, 188, 0.5)',
      warning: '#5255BC',
      error: '#7B7EDE',
      success: 'rgba(22, 22, 22, 0.2)',
    },
  },
};

const modes = {
  lightTheme,
  darkTheme,
  violetTheme,
};

export default modes;
