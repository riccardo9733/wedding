import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'; // Import with classes for sx prop

// Icons
import ChurchIcon from '@mui/icons-material/Church';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationIcon from '@mui/icons-material/Celebration';

// MUI Hooks
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Gallery components (if not already imported, though they should be for HomePage)
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ProgrammaPage: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); // Added for getGalleryCols
  const isMd = useMediaQuery(theme.breakpoints.only('md')); // Added for getGalleryCols

  // Data for the new gallery
  const galleryItemData = [
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
  ];

  // Responsive columns for the new gallery (4 items)
  const getGalleryCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 2;
    return 4; // On lg and up, all 4 images can fit in a row.
  };
  const galleryCols = getGalleryCols();

  // AppBar height is assumed to be 64px.
  const appBarHeight = '64px';
  // Calculate 100% of viewport height minus the AppBar's height
  const heroHeight = `calc(100vh - ${appBarHeight})`;

  return (
    <Box component="article"> {/* Main page container, using article for semantics */}
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: heroHeight,
          overflow: 'hidden',
          backgroundColor: '#e0e0e0', // Fallback color for image loading
        }}
      >
        <img
          src="https://images.pexels.com/photos/16192782/pexels-photo-16192782/free-photo-of-elegant-bride-and-groom-posing-together-in-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Elegant bride and groom posing in an orchard"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
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
            backgroundColor: 'rgba(0, 0, 0, 0.35)', // Slightly increased overlay for better contrast
            px: { xs: 2, sm: 3 }, // Horizontal padding for the overlay content
          }}
        >
          <Typography
            variant="h1" // Using h1 as it's the main title for this view
            component="h1"
            sx={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.75)', // Slightly stronger shadow
              fontSize: { // Responsive font sizes
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5rem',
              },
              lineHeight: 1.2, // Adjust line height for multi-line titles if they occur
            }}
          >
            Locanda dei Sposini
          </Typography>
          {/* Optional: Sub-heading or a short descriptive text */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)', // Slightly off-white for sub-heading
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
              mt: 1, // Margin top to space from main title
              fontWeight: 'normal',
              fontSize: {
                xs: '1rem',
                sm: '1.25rem',
                md: '1.5rem',
              }
            }}
          >
            Il Programma della Nostra Giornata Speciale
          </Typography>
        </Box>
      </Box>

      {/* Location Information Section */}
      <Container maxWidth="md" sx={{ pt: { xs: 4, sm: 5, md: 6 }, pb: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: { xs: 2, sm: 3 } }}>
          La Nostra Location Speciale
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="left" sx={{ lineHeight: 1.75, textIndent: '1.5em' /* Optional: for a slight indent */ }}>
          Descrizione dettagliata della splendida location che ospiterà il nostro giorno speciale. Immersa nel verde, con panorami mozzafiato e angoli romantici, è il luogo perfetto per celebrare il nostro amore e creare ricordi indimenticabili con voi.
        </Typography>
      </Container>

      {/* Location Mini-Gallery Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 2, sm: 3, md: 4 }, pb: { xs: 3, sm: 4, md: 6 } }}>
        <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: { xs: 2, sm: 4 } }}> {/* Adjusted margin bottom */}
          Scopri di Più sulla Location
        </Typography>
        <ImageList
          variant="masonry"
          cols={galleryCols}
          gap={16}
        >
          {galleryItemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  border: '1px solid #eee', // Consistent with Home page gallery
                  borderRadius: '8px',    // Consistent with Home page gallery
                  display: 'block',
                  width: '100%',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* Timeline section will be added below here */}
      <Container maxWidth="md" sx={{ pt: { xs: 2, sm: 3, md: 4 }, pb: { xs: 4, sm: 6, md: 8 } }}>
        <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: { xs: 4, sm: 6 } }}>
          Il Programma della Giornata
        </Typography>
        <Timeline position="right" sx={{ p: 0 }}> {/* Added sx={{ p: 0 }} */}
          {/* Event 1: Cerimonia */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFC0CB' }}>
                <ChurchIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="span" fontWeight="bold">
                10:00 - Cerimonia
              </Typography>
              <Typography variant="body2" color="text.secondary">Presso la Chiesa di San Giovanni</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Event 2: Aperitivo */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFC0CB' }}>
                <LocalBarIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="span" fontWeight="bold">
                12:00 - Aperitivo
              </Typography>
              <Typography variant="body2" color="text.secondary">Presso la Locanda dei Sposini - Giardino Esterno</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Event 3: Pranzo */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFC0CB' }}>
                <RestaurantIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="span" fontWeight="bold">
                13:00 - Pranzo Nuziale
              </Typography>
              <Typography variant="body2" color="text.secondary">Presso la Locanda dei Sposini - Sala Principale</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Event 4: After Party */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFC0CB' }}>
                <CelebrationIcon />
              </TimelineDot>
              <TimelineConnector sx={{ minHeight: {xs: 50, sm: 70} }}/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="span" fontWeight="bold">
                17:00 - Taglio della Torta & After Party
              </Typography>
              <Typography variant="body2" color="text.secondary">Presso la Locanda dei Sposini - Area Lounge</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
};

export default ProgrammaPage;
