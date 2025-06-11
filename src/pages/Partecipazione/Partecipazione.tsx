import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const PartecipazionePage: React.FC = () => {
  const [name, setName] = useState('');
  const [cognome, setCognome] = useState('');
  const [partecipera, setPartecipera] = useState('');
  const [quantita, setQuantita] = useState<number | ''>('');
  const [richiesteSpeciali, setRichiesteSpeciali] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleParteciperaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPartecipera(value);
    if (value === 'no') {
      setQuantita(''); // Clear quantity if not attending
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validation
    if (!name.trim() || !cognome.trim() || !partecipera) {
      setMessage('Per favore, compila tutti i campi obbligatori (Nome, Cognome, Parteciperò/Parteciperemo).');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    if (partecipera === 'si' && (quantita === '' || quantita < 1)) {
      setMessage('Per favore, indica il numero di ospiti se partecipi.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Submission logic
    console.log('Nome:', name);
    console.log('Cognome:', cognome);
    console.log('Parteciperà:', partecipera);
    if (partecipera === 'si') {
      console.log('Quantità:', quantita);
    }
    console.log('Richieste Speciali:', richiesteSpeciali);

    const guestText = partecipera === 'si' ? `${quantita} ospiti` : 'non parteciperà';
    setMessage(`Grazie ${name} ${cognome}, la tua conferma (${guestText}) è stata inviata! Richieste speciali: "${richiesteSpeciali || 'Nessuna'}". (Simulazione)`);
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
    setName('');
    setCognome('');
    setPartecipera('');
    setQuantita('');
    setRichiesteSpeciali('');
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
        Partecipazione
      </Typography>
      <Typography variant="body1" component="p" gutterBottom align="center">
        Per favore, compila il modulo sottostante per farci sapere se parteciperai e per fornirci i dettagli necessari.
      </Typography>
      <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0 }}> {/* Adjusted mt for form inside card */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
              fullWidth
              label="Nome"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Cognome"
              variant="outlined"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" required sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
              <FormLabel component="legend">Parteciperò / Parteciperemo</FormLabel>
              <RadioGroup
                row
                aria-label="partecipera"
                name="partecipera"
                value={partecipera}
                onChange={handleParteciperaChange}
              >
                <FormControlLabel value="si" control={<Radio />} label="Sì" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Quanti sarete?"
              type="number"
              variant="outlined"
              value={quantita}
              onChange={(e) => setQuantita(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
              InputProps={{ inputProps: { min: 1 } }}
              required={partecipera === 'si'}
              disabled={partecipera !== 'si'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Allergie? Richieste menu vegano o vegetariano?"
              variant="outlined"
              multiline
              rows={3}
              value={richiesteSpeciali}
              onChange={(e) => setRichiesteSpeciali(e.target.value)}
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
              Invia Partecipazione
            </Button>
          </Grid>
        </Grid>
      </Box>
    </CardContent>
  </Card>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PartecipazionePage;
