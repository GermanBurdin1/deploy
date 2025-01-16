import { GuessingGame } from './guessingGame';

const game = new GuessingGame();
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');

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
    messageDiv.textContent = (error).message;
  }
});
