import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const IscrizionePage: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<number | ''>('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic validation
    if (!name.trim() || guests === '' || guests < 1) {
      setMessage('Per favore, compila tutti i campi correttamente.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    // Placeholder for actual submission logic
    console.log('Nome e Cognome:', name);
    console.log('Numero di Ospiti:', guests);
    setMessage(`Grazie ${name}, la tua conferma per ${guests} ospiti è stata inviata! (Simulazione)`);
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
    setName('');
    setGuests('');
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Conferma la tua Presenza
      </Typography>
      <Typography variant="body1" component="p" gutterBottom align="center">
        Compila il modulo qui sotto per confermare la tua partecipazione al nostro matrimonio.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome e Cognome"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Numero di Ospiti"
              type="number"
              variant="outlined"
              value={guests}
              onChange={(e) => setGuests(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
              InputProps={{ inputProps: { min: 1 } }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Invia Conferma
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default IscrizionePage;
