import { createTheme } from '@mui/material/styles';

// const palePink = '#FFDDF0'; // No longer default background
const whiteColor = '#FFFFFF';
const blackText = '#000000';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue - for buttons, interactive elements
      contrastText: whiteColor, // Ensure text on primary buttons is white
    },
    secondary: {
      main: '#dc004e', // Pink/Red - for accents, secondary actions
      contrastText: whiteColor, // Ensure text on secondary buttons is white
    },
    background: {
      default: whiteColor, // Main page background is now white
      paper: whiteColor,   // Background for components like Card, Drawer, Menu
    },
    text: {
      primary: blackText,   // Black for main text
      secondary: '#424242', // Darker gray for secondary text
    },
  },
  typography: {
    h1: { color: blackText },
    h2: { color: blackText },
    h3: { color: blackText },
    h4: { color: blackText },
    h5: { color: blackText },
    h6: { color: blackText },
    body1: { color: blackText },
    body2: { color: blackText }, // Can be overridden with color="text.secondary"
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: whiteColor, // AppBar background is now white
          color: blackText,           // Default text/icon color for AppBar content
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.04), 0px 1px 10px 0px rgba(0,0,0,0.03)', // A subtle shadow like theme.shadows[2] or [1]
          // borderBottom: `1px solid ${grey[300]}`, // Alternative: a subtle border
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: whiteColor,
        },
        containedSecondary: {
          color: whiteColor,
        },
        textInherit: { // Assuming 'inherit' is used for AppBar buttons
          color: blackText,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)' // Slight dark hover for black text button
          }
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: blackText, // Default IconButton color (e.g., MenuIcon on AppBar)
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: blackText, // Make links black by default
          textDecoration: 'underline',
          '&:hover': {
            color: '#1976d2', // Link hover color (primary.main)
          }
        }
      }
    },
    // MuiTypography is not strictly needed here as text color is handled by direct settings
    // and inheritance from MuiAppBar's color override.
  }
});

export default theme;
