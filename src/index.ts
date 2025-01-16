import { GuessingGame } from './guessingGame';

const game = new GuessingGame();
const guessInput = document.getElementById('guessInput') as HTMLInputElement;
const submitGuess = document.getElementById('submitGuess') as HTMLButtonElement;
const messageDiv = document.getElementById('message') as HTMLDivElement;
const attemptsDiv = document.getElementById('attempts') as HTMLDivElement;

submitGuess.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value, 10);

  if (isNaN(userGuess)) {
    messageDiv.textContent = 'Veuillez entrer un nombre valide.';
    return;
  }

  try {
    const result = game.guess(userGuess);
    messageDiv.textContent = result;
    attemptsDiv.textContent = `Tentatives : ${game.getAttempts()}`;
    if (result.startsWith('Vous avez deviné')) {
      guessInput.disabled = true;
      submitGuess.disabled = true;
    }
  } catch (error) {
    messageDiv.textContent = (error as Error).message;
  }
});
