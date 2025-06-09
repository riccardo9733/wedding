import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
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
