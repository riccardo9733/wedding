import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia'; // Optional: if you want to add actual images

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Welcome Message and Event Info */}
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Benvenuti al Nostro Matrimonio!
          </Typography>
          <Typography variant="h5" component="p" gutterBottom align="center">
            Beatrice & Enrico
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center">
            Celebreremo il nostro amore il
          </Typography>
          <Typography variant="h5" component="p" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            15 Settembre 2024
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center">
            alle ore 16:00
          </Typography>
        </Grid>

        {/* Couple's Photo Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Card>
            {/*
            // Optional: If you have an image
            <CardMedia
              component="img"
              height="300"
              image="/path-to-couple-photo.jpg" // Replace with actual path
              alt="Beatrice e Enrico"
            />
            */}
            <Box
              sx={{
                height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey.200', // Placeholder background
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Foto degli Sposi Qui
              </Typography>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                Beatrice & Enrico
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Presto insieme per sempre!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Location Photo Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Card>
            {/*
            // Optional: If you have an image
            <CardMedia
              component="img"
              height="300"
              image="/path-to-location-photo.jpg" // Replace with actual path
              alt="Location del Matrimonio"
            />
            */}
            <Box
              sx={{
                height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey.200', // Placeholder background
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Foto della Location Qui
              </Typography>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                La Location
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Un posto da sogno per il nostro giorno speciale.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default HomePage;
