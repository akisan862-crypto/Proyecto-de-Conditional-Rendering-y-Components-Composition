import { useState } from 'react';
import { Card } from './Card';

export function GuessNumber() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hasWon, setHasWon] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess, 10);
    if (isNaN(num)) return setFeedback('Por favor, ingresa un número.');
    
    if (num === targetNumber) {
      setFeedback('¡Exacto! Adivinaste el número. 🎉');
      setHasWon(true);
    } else if (num < targetNumber) {
      setFeedback('Demasiado bajo. Intenta con un número mayor.');
    } else {
      setFeedback('Demasiado alto. Intenta con un número menor.');
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 10) + 1);
    setGuess('');
    setFeedback('');
    setHasWon(false);
  };

  return (
    // Composición: Usamos el contenedor visual e inyectamos la interfaz del juego
    <Card title="Adivina el Número (1 - 10)">
      
      {/* Renderizado Condicional 1: Ternario para alternar entre el input y el botón de reinicio */}
      {!hasWon ? (
        <div style={{ marginBottom: '15px' }}>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            style={{ padding: '8px', borderRadius: '8px', border: 'none', marginRight: '10px' }}
          />
          <button onClick={handleGuess} style={{ background: '#ff4d94', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer' }}>
            Adivinar
          </button>
        </div>
      ) : (
        <button onClick={resetGame} style={{ background: '#48cae4', color: '#0b132b', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          Jugar de nuevo
        </button>
      )}

      {/* Renderizado Condicional 2: Evaluador && para mostrar el texto solo si hay un mensaje */}
      {feedback && (
        <p style={{ color: hasWon ? '#a7f3d0' : '#ffb8d8', fontWeight: 'bold' }}>
          {feedback}
        </p>
      )}
    </Card>
  );
}