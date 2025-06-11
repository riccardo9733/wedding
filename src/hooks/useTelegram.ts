// src/hooks/useTelegram.ts
import { useState } from 'react';

const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN_PLACEHOLDER';
const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID_PLACEHOLDER';

export interface IFormInput {
  nome: string;
  cognome: string;
  partecipera: 'si' | 'no' | '';
  quantita: number | '';
  richiesteSpeciali?: string;
}

const useTelegram = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (data: IFormInput): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    const messageBody = `
Nome: ${data.nome}
Cognome: ${data.cognome}
Parteciperà: ${data.partecipera}
Quantità: ${data.partecipera === 'si' ? data.quantita : 'N/A'}
Richieste Speciali: ${data.richiesteSpeciali || 'Nessuna'}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: messageBody,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        return true;
      } else {
        const errorData = await response.json();
        console.error('Error sending Telegram message:', errorData);
        setError(`Failed to send message. Server responded with: ${response.status}`);
        setIsLoading(false);
        return false;
      }
    } catch (e: any) {
      console.error('Network error sending Telegram message:', e);
      setError(e.message || 'Network error or failed to send message.');
      setIsLoading(false);
      return false;
    }
  };

  return { sendMessage, isLoading, error };
};

export default useTelegram;
