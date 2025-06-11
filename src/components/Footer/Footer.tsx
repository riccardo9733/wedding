import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(193, 216, 195, 0.5)',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          © 2024 Beatrice & Enrico's Wedding
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Made with ❤️
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
