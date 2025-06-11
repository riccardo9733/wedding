import React, { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface IFormInput {
  nome: string;
  cognome: string;
  partecipera: 'si' | 'no' | '';
  quantita: number | '';
  richiesteSpeciali?: string;
}

const PartecipazionePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
    reset,
  } = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues: {
      nome: '',
      cognome: '',
      partecipera: '',
      quantita: '',
      richiesteSpeciali: '',
    },
  });

  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const watchPartecipera = watch('partecipera');

  useEffect(() => {
    if (watchPartecipera === 'no') {
      setValue('quantita', '', { shouldValidate: false });
    }
  }, [watchPartecipera, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Submission logic
    console.log('Nome:', data.nome);
    console.log('Cognome:', data.cognome);
    console.log('Parteciperà:', data.partecipera);
    if (data.partecipera === 'si') {
      console.log('Quantità:', data.quantita);
    }
    console.log('Richieste Speciali:', data.richiesteSpeciali);

    const guestText = data.partecipera === 'si' ? `${data.quantita} ospiti` : 'non parteciperà';
    setMessage(`Grazie ${data.nome} ${data.cognome}, la tua conferma (${guestText}) è stata inviata! Richieste speciali: "${data.richiesteSpeciali || 'Nessuna'}". (Simulazione)`);
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
    reset(); // Reset form using react-hook-form's reset
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
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 0 }}>
            <Stack spacing={3} sx={{ alignItems: 'stretch' }}>
              <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  {...register('nome', { required: 'Nome è obbligatorio' })}
                  error={!!errors.nome}
                  helperText={errors.nome?.message}
                  sx={{ flexGrow: 1 }}
                />
                <TextField
                  fullWidth
                  label="Cognome"
                  variant="outlined"
                  {...register('cognome', { required: 'Cognome è obbligatorio' })}
                  error={!!errors.cognome}
                  helperText={errors.cognome?.message}
                  sx={{ flexGrow: 1 }}
                />
              </Stack>
              <FormControl component="fieldset" error={!!errors.partecipera} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <FormLabel component="legend">Parteciperò / Parteciperemo</FormLabel>
                <Controller
                  name="partecipera"
                    control={control}
                    rules={{ required: 'Selezionare una risposta è obbligatorio' }}
                    render={({ field }) => (
                      <RadioGroup
                        row
                        aria-label="partecipera"
                        {...field}
                      >
                        <FormControlLabel value="si" control={<Radio />} label="Sì" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                    )}
                  />
                  {errors.partecipera && <Typography color="error" variant="caption" sx={{ display: 'block', textAlign: 'center', mt:0.5 }}>{errors.partecipera.message}</Typography>}
                </FormControl>
              <TextField
                fullWidth
                label="Quanti sarete?"
                  type="number"
                  variant="outlined"
                  {...register('quantita', {
                    required: watchPartecipera === 'si' ? 'Specificare quanti sarete è obbligatorio' : false,
                    min: watchPartecipera === 'si' ? { value: 1, message: 'Devi essere almeno 1' } : undefined,
                    setValueAs: (value) => (value === '' ? '' : parseInt(value, 10)), // Ensure empty string or number
                  })}
                  InputProps={{ inputProps: { min: 1 } }}
                  error={!!errors.quantita}
                  helperText={errors.quantita?.message}
                  disabled={watchPartecipera !== 'si'}
                />
              <TextField
                fullWidth
                label="Allergie? Richieste menu vegano o vegetariano?"
                variant="outlined"
                multiline
                rows={3}
                {...register('richiesteSpeciali')}
                error={!!errors.richiesteSpeciali}
                helperText={errors.richiesteSpeciali?.message}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ alignSelf: 'center' }}
              >
                Invia Partecipazione
              </Button>
            </Stack>
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
