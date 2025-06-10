import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';

const HomePage: React.FC = () => {
  const appBarHeight = '64px';
  const heroHeight = `calc(85vh - ${appBarHeight})`; // Using 85vh for a larger hero

  const itemData = [
    {
      img: 'https://images.pexels.com/photos/9584933/pexels-photo-9584933.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: '',
    },    
    {
      img: 'https://images.pexels.com/photos/4759900/pexels-photo-4759900.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Very Tall Plant',
    },
    {
      img: 'https://images.pexels.com/photos/7509772/pexels-photo-7509772.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: ' ',
    },
    {
      img: 'https://images.pexels.com/photos/2725458/pexels-photo-2725458.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: '',
    },
    {
      img: 'https://images.pexels.com/photos/612936/pexels-photo-612936.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: '',
    },
    {
      img: 'https://images.pexels.com/photos/4247817/pexels-photo-4247817.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: '',
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
          src="https://static.wixstatic.com/media/dd0004_98beaa2da8a647f084359cd125186f9a~mv2.jpg/v1/fill/w_1920,h_1944,al_b,q_90,enc_avif,quality_auto/dd0004_98beaa2da8a647f084359cd125186f9a~mv2.jpg"
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
        <Gallery images={itemData} enableRandomCols={true} />
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
