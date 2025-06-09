import { createTheme } from '@mui/material/styles';

const palePink = '#FFDDF0'; // A pale pink color
const blackText = '#000000';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue - for buttons, interactive elements
      contrastText: '#ffffff', // Ensure text on primary buttons is white
    },
    secondary: {
      main: '#dc004e', // Pink/Red - for accents, secondary actions
      contrastText: '#ffffff', // Ensure text on secondary buttons is white
    },
    background: {
      default: palePink,
      paper: '#ffffff', // Keep paper white for elements like Cards, Drawers, Menus
    },
    text: {
      primary: blackText, // Black for main text
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
          backgroundColor: palePink,
          color: blackText, // Default text/icon color for AppBar content
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Contained buttons use palette.primary/secondary.contrastText by default.
        // We ensure here they are explicitly set if needed.
        containedPrimary: {
          color: '#ffffff',
        },
        containedSecondary: {
          color: '#ffffff',
        },
        // Text buttons on AppBar should be black
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
        // If you have IconButtons with specific colors like primary/secondary:
        // colorPrimary: { color: '#1976d2' },
        // colorSecondary: { color: '#dc004e' },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: blackText, // Make links black by default
          textDecoration: 'underline',
          '&:hover': {
            color: '#1976d2', // Link hover color
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // Ensure Typography components inherit color correctly within AppBar
          // This might not be strictly necessary if direct color props are used on Typography
          // or if the AppBar's `color` style is sufficient.
        },
        // Ensure link-like Typography also uses blackText
        // This is for the "Beatrice e Enrico" in AppBar if it's a Typography wrapping a RouterLink
        colorInherit: { // If Typography has color="inherit"
           // This specific override needs to be carefully considered.
           // Generally, `color: blackText` in `MuiAppBar.styleOverrides.root` should cover it.
        }
      }
    }
  }
});

export default theme;
