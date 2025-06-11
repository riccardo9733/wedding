import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Icons (keeping these as they will be reused in the List)
import ChurchIcon from '@mui/icons-material/Church';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationIcon from '@mui/icons-material/Celebration';

// List components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Gallery from '../../components/Gallery';

const ProgrammaPage: React.FC = () => {
  // Data for the new gallery
  const galleryItemData = [
    {
      img: 'https://www.villacanal.it/wp-content/uploads/2024/09/Fotostudio4a-768x960.jpg',
      title: '',
    },    
    {
      img: 'https://www.villacanal.it/wp-content/uploads/2024/09/Ottica-Martano2.jpg',
      title: 'Very Tall Plant',
    },
    {
      img: 'https://www.villacanal.it/wp-content/uploads/2020/01/43_villacanal-768x480.jpg',
      title: ' ',
    },
    {
      img: 'https://www.villacanal.it/wp-content/uploads/2020/01/21_villacanal_giardino-768x480.jpg',
      title: '',
    },
    {
      img: 'https://www.villacanal.it/wp-content/uploads/2020/01/2_villacanal.JPG.jpg',
      title: '',
    },
    {
      img: 'https://www.villacanal.it/wp-content/uploads/2024/09/Greta-Bellucci-683x1024.jpg',
      title: '',
    },
  ];

  // Define the events data for the List
  const events = [
    { time: "10:00", title: "Cerimonia", description: "Presso la Chiesa di San Giovanni", icon: <ChurchIcon sx={{color:'#FFA725'}} /> },
    { time: "12:00", title: "Aperitivo", description: "Presso la Locanda dei Sposini - Giardino Esterno", icon: <LocalBarIcon sx={{color:'#FFA725'}}  /> },
    { time: "13:00", title: "Pranzo Nuziale", description: "Presso la Locanda dei Sposini - Sala Principale", icon: <RestaurantIcon sx={{color:'#FFA725'}} /> },
    { time: "17:00", title: "Taglio della Torta & After Party", description: "Presso la Locanda dei Sposini - Area Lounge", icon: <CelebrationIcon sx={{color:'#FFA725'}} /> },
  ];

  // AppBar height is assumed to be 64px.
  const appBarHeight = '64px';
  // Calculate 100% of viewport height minus the AppBar's height
  const heroHeight = `calc(90vh - ${appBarHeight})`;

  return (
    <Box component="article" sx={{backgroundColor: '#FFF5E4'}}> {/* Main page container, using article for semantics */}
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
          src="https://www.villacanal.it/wp-content/uploads/2020/01/2_villacanal.JPG.jpg"
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

      {/* Timeline section will be added below here */}
      <Container maxWidth="md" sx={{ pt: { xs: 2, sm: 3, md: 4 }, pb: { xs: 4, sm: 6, md: 8 } }}>
        <Typography variant="h4" component="h2" textAlign="center"  sx={{ mb: { xs: 4, sm: 6 } }}>
          Il Programma della Giornata
        </Typography>
        <List sx={{ width: '100%',  borderRadius: '8px', boxShadow: 1 }}>
          {events.map((event, index) => (
            <React.Fragment key={event.title}>
              <ListItem alignItems="flex-start" sx={{ py: { xs: 1.5, sm: 2 } }}>
                <ListItemIcon sx={{ mt: 0.5, color: 'primary.main', minWidth: 40 }}> {/* Adjusted minWidth */}
                  {event.icon}
                </ListItemIcon>
                <ListItemText
                  primary={`${event.time} - ${event.title}`}
                  secondary={event.description}
                  primaryTypographyProps={{ fontWeight: 'bold', variant: 'body1' }}
                  secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                />
              </ListItem>
              {index < events.length - 1 && <Divider component="li" variant="middle" />} {/* Added variant="middle" */}
            </React.Fragment>
          ))}
        </List>
      </Container>

      {/* Location Information Section */}
      <Container maxWidth="md" sx={{ pt: { xs: 4, sm: 5, md: 6 }, pb: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h4" component="h2" textAlign="center"  sx={{ mb: { xs: 2, sm: 3 } }}>
          La Nostra Location Speciale
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="left" sx={{ lineHeight: 1.75, textIndent: '1.5em' /* Optional: for a slight indent */ }}>
          Descrizione dettagliata della splendida location che ospiterà il nostro giorno speciale. Immersa nel verde, con panorami mozzafiato e angoli romantici, è il luogo perfetto per celebrare il nostro amore e creare ricordi indimenticabili con voi.
        </Typography>
      </Container>

      {/* Location Mini-Gallery Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 2, sm: 3, md: 4 }, pb: { xs: 3, sm: 4, md: 6 } }}>
      
        <Gallery images={galleryItemData} enableRandomCols={true} />
      </Container>

      
    </Box>
  );
};

export default ProgrammaPage;
