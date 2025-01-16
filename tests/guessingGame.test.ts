import { GuessingGame } from '../src/guessingGame';

describe('GuessingGame', () => {
  let game: GuessingGame;

  beforeEach(() => {
    game = new GuessingGame();
  });

  // --- Scénarios classiques ---
  it('devrait retourner le bon message si le nombre est deviné en une tentative', () => {
    game.setTarget(50);
    expect(game.guess(50)).toBe('Vous avez deviné ! Tentatives : 1');
  });

  it('devrait retourner le bon message après plusieurs tentatives', () => {
    game.setTarget(50);
    game.guess(30); // Tentative 1
    game.guess(40); // Tentative 2
    expect(game.guess(50)).toBe('Vous avez deviné ! Tentatives : 3');
  });

  // --- Différents chemins d'exécution ---
  it('devrait retourner "Plus grand" si le nombre est inférieur au nombre cible', () => {
    game.setTarget(50);
    expect(game.guess(30)).toBe('Plus grand');
  });

  it('devrait retourner "Plus petit" si le nombre est supérieur au nombre cible', () => {
    game.setTarget(50);
    expect(game.guess(70)).toBe('Plus petit');
  });

  // --- Scénarios d’échecs ---
  it('devrait lever une erreur si le nombre est inférieur à 1', () => {
    expect(() => game.guess(0)).toThrow('Le nombre doit être compris entre 1 et 100.');
  });

  it('devrait lever une erreur si le nombre est supérieur à 100', () => {
    expect(() => game.guess(101)).toThrow('Le nombre doit être compris entre 1 et 100.');
  });

  // --- Tests supplémentaires ---
  it('devrait correctement suivre le nombre de tentatives', () => {
    game.setTarget(50);
    game.guess(30); // Tentative 1
    game.guess(70); // Tentative 2
    expect(game.getAttempts()).toBe(2);
  });

  it('devrait retourner le nombre cible actuel', () => {
    game.setTarget(42);
    expect(game.getTarget()).toBe(42);
  });
});
