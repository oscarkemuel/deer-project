// import { createMuiTheme } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#F50057'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#FFF'
    }
  }
});

export default theme;
