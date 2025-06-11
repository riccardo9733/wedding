import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';

const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN_PLACEHOLDER';
const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID_PLACEHOLDER';

interface IFormInput {
  nome: string;
  cognome: string;
  partecipera: 'si' | 'no' | '';
  quantita: number | '';
  richiesteSpeciali?: string;
}

const sendTelegramMessage = async (data: IFormInput) => {
  // Ensure constants are defined (they should be from the previous step)
  const BOT_TOKEN = TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN_PLACEHOLDER';
  const CHAT_ID = TELEGRAM_CHAT_ID || 'YOUR_TELEGRAM_CHAT_ID_PLACEHOLDER';

  const message = `
Nome: ${data.nome}
Cognome: ${data.cognome}
Parteciperà: ${data.partecipera}
Quantità: ${data.partecipera === 'si' ? data.quantita : 'N/A'}
Richieste Speciali: ${data.richiesteSpeciali || 'Nessuna'}
  `.trim();

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      return { ok: true };
    } else {
      const errorData = await response.json();
      console.error('Error sending Telegram message:', errorData);
      return { ok: false, error: errorData };
    }
  } catch (error) {
    console.error('Network error sending Telegram message:', error);
    return { ok: false, error };
  }
};

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

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // Submission logic
    console.log('Nome:', data.nome);
    console.log('Cognome:', data.cognome);
    console.log('Parteciperà:', data.partecipera);
    if (data.partecipera === 'si') {
      console.log('Quantità:', data.quantita);
    }
    console.log('Richieste Speciali:', data.richiesteSpeciali);

    const telegramResult = await sendTelegramMessage(data);

    const guestText = data.partecipera === 'si' ? `${data.quantita} ospiti` : 'non parteciperà';

    if (telegramResult.ok) {
      setMessage(`Grazie ${data.nome} ${data.cognome}, la tua conferma (${guestText}) è stata inviata! Richieste speciali: "${data.richiesteSpeciali || 'Nessuna'}".`);
      setSnackbarSeverity('success');
    } else {
      setMessage(`Si è verificato un errore durante l'invio della tua partecipazione. Riprova più tardi.`);
      setSnackbarSeverity('error');
    }

    setOpenSnackbar(true);
    reset(); // Reset form using react-hook-form's reset
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    console.log(event)
    setOpenSnackbar(false);
  };

  const appBarHeight = '64px';

  const heroHeight = `calc(90vh - ${appBarHeight})`;

  return (
    <Container maxWidth={false}  sx={{ pt: 4, pb: 4, backgroundColor: '#FFF5E4' }} >
      <Box sx={{height: heroHeight}}>

      <Typography color='#6A9C89' variant="h3" component="h1" gutterBottom align="center">
        Partecipazione
      </Typography>
      <Typography variant="body1" component="p" gutterBottom align="center">
        Per favore, compila il modulo sottostante per farci sapere se parteciperai e per fornirci i dettagli necessari.
      </Typography>
      <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 , backgroundColor: '#FFF5E4' }}>
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
                  sx={{
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#6A9C89',
                      },
                      '&:hover fieldset': {
                        borderColor: '#6A9C89',
                      },
                    },
                    '& label.Mui-focused': {
                      color: '#6A9C89',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Cognome"
                  variant="outlined"
                  {...register('cognome', { required: 'Cognome è obbligatorio' })}
                  error={!!errors.cognome}
                  helperText={errors.cognome?.message}
                  sx={{
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#6A9C89',
                      },
                      '&:hover fieldset': {
                        borderColor: '#6A9C89',
                      },
                    },
                    '& label.Mui-focused': {
                      color: '#6A9C89',
                    },
                  }}
                />
              </Stack>
              <FormControl
                component="fieldset"
                error={!!errors.partecipera}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:focus-within': {
                    '& .MuiFormLabel-root': {
                      color: '#6A9C89',
                    },
                  },
                }}
              >
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
                        <FormControlLabel value="si" control={<Radio sx={{
                          '&.Mui-focusVisible': {
                            outline: '2px solid #6A9C89', // Or use a boxShadow for a softer glow
                            outlineOffset: '2px',
                          },
                          '&.Mui-checked': { // Optional: if you want to change checked color too
                            color: '#6A9C89',
                          }
                        }} />} label="Sì" />
                        <FormControlLabel value="no" control={<Radio sx={{
                          '&.Mui-focusVisible': {
                            outline: '2px solid #6A9C89',
                            outlineOffset: '2px',
                          },
                          '&.Mui-checked': { // Optional: if you want to change checked color too
                            color: '#6A9C89',
                          }
                        }} />} label="No" />
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
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#6A9C89',
                      },
                      '&:hover fieldset': {
                        borderColor: '#6A9C89',
                      },
                    },
                    '& label.Mui-focused': {
                      color: '#6A9C89',
                    },
                  }}
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#6A9C89',
                    },
                    '&:hover fieldset': {
                      borderColor: '#6A9C89',
                    },
                  },
                  '& label.Mui-focused': {
                    color: '#6A9C89',
                  },
                }}
              />
              <Button
                type="submit"
                variant="outlined"
                // color="primary" // Overridden by sx
                size="large"
                fullWidth
                sx={{
                  borderColor: '#6A9C89',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#6A9C89',
                  },
                  mt: 2, // Added margin top for spacing from the field above
                }}
              >
                Invia Partecipazione
              </Button>
            </Stack>
          </Box>
        </CardContent>
  </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      </Box>
    </Container>
  );
};

export default PartecipazionePage;
