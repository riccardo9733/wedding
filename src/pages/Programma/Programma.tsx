import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgrammaPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Programma della Giornata
      </Typography>
      <Box sx={{ mt: 3, p: 2, border: '1px dashed grey', borderRadius: '4px' }}>
        <Typography variant="h6" component="p" align="center" color="text.secondary">
          Stiamo definendo gli ultimi dettagli per rendere questa giornata indimenticabile!
        </Typography>
        <Typography variant="body1" component="p" align="center" sx={{ mt: 2 }}>
          A breve pubblicheremo il programma completo con orari e attività.
        </Typography>
        <Typography variant="body1" component="p" align="center" sx={{ mt: 1 }}>
          Tornate a trovarci presto!
        </Typography>
      </Box>
    </Container>
  );
};

export default ProgrammaPage;
