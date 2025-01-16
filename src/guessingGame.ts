export class GuessingGame {
  private target: number;
  private attempts: number;

  constructor() {
    this.target = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
  }

  guess(number: number): string {
    console.log(`Le joueur a deviné ${number}`);
    if (number < 1 || number > 100) {
      throw new Error('Le nombre doit être compris entre 1 et 100.');
    }
    this.attempts++;
    console.log(` Tentative n°${this.attempts}`);

    if (number === this.target) {
      return `Vous avez deviné ! Tentatives : ${this.attempts}`;
    }
    const hint = number < this.target ? 'Plus grand' : 'Plus petit';
    return hint;
  }

  getAttempts(): number {
    return this.attempts;
  }

  getTarget(): number {
    return this.target;
  }

  setTarget(target: number): void {
    this.target = target;
  }
}
