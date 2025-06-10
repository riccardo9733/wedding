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

const ProgrammaPage: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

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

      {/* Timeline section will be added below here */}
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: { xs: 4, sm: 6 } }}>
          Il Programma della Giornata
        </Typography>
        <Timeline position="alternate"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              display: { xs: 'none', sm: 'block' }, // Hide opposite content on xs screens
              flex: { sm: 0.2 }, // Apply flex only on sm and up
              textAlign: 'right',
              paddingRight: { sm: 2 }
            },
          }}
        >
          {/* Event 1: Cerimonia */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
              10:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <ChurchIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {isXs && "10:00 - "}Cerimonia
              </Typography>
              <Typography color="text.secondary">Presso la Chiesa di San Giovanni</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Event 2: Aperitivo */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
              12:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <LocalBarIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {isXs && "12:00 - "}Aperitivo
              </Typography>
              <Typography color="text.secondary">Presso la Locanda dei Sposini - Giardino Esterno</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Event 3: Pranzo */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
              13:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <RestaurantIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {isXs && "13:00 - "}Pranzo Nuziale
              </Typography>
              <Typography color="text.secondary">Presso la Locanda dei Sposini - Sala Principale</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Event 4: After Party */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
              17:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <CelebrationIcon />
              </TimelineDot>
              <TimelineConnector sx={{ minHeight: {xs: 50, sm: 70} }}/> {/* Optional: extend last connector */}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {isXs && "17:00 - "}Taglio della Torta & After Party
              </Typography>
              <Typography color="text.secondary">Presso la Locanda dei Sposini - Area Lounge</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
};

export default ProgrammaPage;
