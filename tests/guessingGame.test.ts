import { GuessingGame } from '../src/guessingGame';

describe('GuessingGame', () => {
  let game: GuessingGame;

  beforeEach(() => {
    game = new GuessingGame();
  });

  it('doit retourner "Plus grand" si le nombre est inférieur au nombre cible', () => {
    game.setTarget(50); 
    expect(game.guess(30)).toBe('Plus grand');
  });

  it('doit retourner "Plus petit" si le nombre est supérieur au nombre cible', () => {
    game.setTarget(50); 
    expect(game.guess(70)).toBe('Plus petit');
  });

  it('doit retourner le message correct si le nombre est deviné', () => {
    game.setTarget(50); 
    game.guess(30);
    game.guess(40);
    expect(game.guess(50)).toBe('Vous avez deviné ! Tentatives : 3');
  });

  it('doit lever une erreur si le nombre est hors des limites', () => {
    expect(() => game.guess(0)).toThrow('Le nombre doit être compris entre 1 et 100.');
    expect(() => game.guess(101)).toThrow('Le nombre doit être compris entre 1 et 100.');
  });

  it('doit correctement suivre le nombre de tentatives', () => {
    game.setTarget(50); 
    game.guess(30);
    game.guess(70);
    game.guess(50);
    expect(game.getAttempts()).toBe(3);
  });
});
