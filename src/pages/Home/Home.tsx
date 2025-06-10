import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  // lg and xl will use the default 'cols' value from getCols

  const getCols = () => {
    if (isXs) return 2; // Changed from 1 to 2 for xs screens
    if (isSm) return 2;
    if (isMd) return 3;
    return 4; // For lg and xl screens
  };

  const cols = getCols();
  const appBarHeight = '64px';
  const heroHeight = `calc(85vh - ${appBarHeight})`; // Using 85vh for a larger hero

  const itemData = [
    {
      img: 'https://images.pexels.com/photos/158028/baskets-sale-marketplace-shops-158028.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Portrait Basket',
    },
    {
      img: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Wide Landscape Mountains',
    },
    {
      img: 'https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Square-ish Food',
    },
    {
      img: 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Very Tall Plant',
    },
    {
      img: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Panorama Beach',
    },
    {
      img: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Standard Landscape Aurora',
    },
    {
      img: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Another Portrait Woman',
    },
    {
      img: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Wider Landscape Abstract',
    },
  ];

  return (
    <Box component="article"> {/* Using article for semantic grouping of the page content */}
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: heroHeight,
          overflow: 'hidden',
          backgroundColor: '#000', // Fallback background if image doesn't load
        }}
      >
        <img
          src="https://images.pexels.com/photos/32392446/pexels-photo-32392446/free-photo-of-elegante-bacio-nuziale-in-bianco-e-nero.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beatrice e Enrico - Un elegante bacio nuziale in bianco e nero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center', // Ensures the image is centered
            filter: 'grayscale(100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
            // Optional: add a very subtle dark overlay to ensure text contrast
            // backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h1" // Using h1 for the main title on the page
            component="h1"
            gutterBottom
            sx={{
              color: '#FFFFFF',
              fontWeight: 'bold', // Using 'bold' for standard bold
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)', // Adjusted shadow for clarity
              fontSize: { // Responsive font size
                xs: '2.75rem', // Adjusted for very small screens
                sm: '4rem',   // Small screens
                md: '5rem',   // Medium screens
                lg: '6rem',   // Large screens
              },
            }}
          >
            Beatrice & Enrico
          </Typography>
          {/* Optional: Sub-heading or date */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: '#FFFFFF',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
              fontWeight: 'normal',
            }}
          >
            15 Settembre 2024
          </Typography>
        </Box>
      </Box>

      {/* Placeholder for other content sections that will follow the hero */}

      {/* Aphorism Section */}
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 } }}> {/* Responsive padding */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            component="blockquote" // Using blockquote for semantic meaning
            sx={{
              fontStyle: 'italic',
              color: 'text.secondary', // Softer color
              mb: 1, // Margin bottom before the author
              fontSize: { // Responsive font size for aphorism
                xs: '1.1rem',
                sm: '1.25rem',
                md: '1.5rem',
              }
            }}
          >
            "L'amore non consiste nel guardarsi l'un l'altro, ma nel guardare insieme nella stessa direzione."
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color="text.primary" // Author can be slightly more prominent or also text.secondary
            sx={{ fontWeight: 'medium' }}
          >
            - Antoine de Saint-Exupéry
          </Typography>
        </Box>
      </Container>

      {/* Location Gallery Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: { xs: 3, sm: 4, md: 6 } }}>
          Un Assaggio della Location
        </Typography>
        <ImageList
          variant="masonry"
          cols={cols}
          gap={16} // Increased gap for better visual separation
        >
          {itemData.map((item) => {
            // Determine column span for the item
            let itemCols = 1; // Default to 1 column span for md, lg, xl and even sm where ImageList cols >= 2
            if (isXs) {
              // For xs screens (where ImageList cols is 2), ~30% chance to span 2 columns (full width)
              itemCols = Math.random() < 0.3 ? 2 : 1;
            }
            // For sm screens (where ImageList cols is 2), all items will span 1 column by default.
            // No specific random logic for 'sm' is requested, so items will just be 1 col wide.
            // If 'sm' also needed random spanning, similar logic could be added:
            // else if (isSm) { itemCols = Math.random() < 0.X ? 2 : 1; }

            return (
              <ImageListItem key={item.img} cols={itemCols}>
                <img
                  src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  // Retaining previous styling for consistency
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  display: 'block',
                  width: '100%',
                }}
              />
            </ImageListItem>
          )})}
        </ImageList>
      </Container>

      {/* Registration CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 }, display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ minWidth: 275, maxWidth: { xs: '100%', sm: 500 }, width: '100%', boxShadow: 3 }}> {/* Added boxShadow for better visibility */}
          <CardContent sx={{ textAlign: 'center', px: { xs: 2, sm: 3 }, py: { xs: 3, sm: 4} }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              Pronto a Festeggiare con Noi?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Non vediamo l'ora di condividere questo giorno speciale. Clicca qui sotto per confermare la tua presenza!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', pt: 0, pb: { xs: 2, sm: 3 } }}> {/* Adjusted padding */}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/iscrizione"
              size="large"
              sx={{ minWidth: '200px' }} // Ensure button is a good size
            >
              Conferma Presenza
            </Button>
          </CardActions>
        </Card>
      </Container>

      {/* Example for future sections:
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Dettagli del Giorno
        </Typography>
        <Typography>
          Qui verranno inserite altre informazioni sul matrimonio...
        </Typography>
      </Container>
      */}
    </Box>
  );
};

export default HomePage;
