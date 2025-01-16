export class GuessingGame {
  private target: number;
  private attempts: number;

  constructor() {
    this.target = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    console.log(`Nb cible initialisé à ${this.target}`);
  }

  guess(number: number): string {
    console.log(`Le joueur a deviné ${number}`);
    if (number < 1 || number > 100) {
      console.log('Erreur - Nombre hors limites');
      throw new Error('Le nombre doit être compris entre 1 et 100.');
    }
    this.attempts++;
    console.log(` Tentative n°${this.attempts}`);

    if (number === this.target) {
      console.log(`deviner: Correct ! Le nombre était ${this.target}`);
      return `Vous avez deviné ! Tentatives : ${this.attempts}`;
    }
    const hint = number < this.target ? 'Plus grand' : 'Plus petit';
    console.log(`deviner: Indice - ${hint}`);
    return hint;
  }

  getAttempts(): number {
    console.log(`obt tentative: Nombre actuel de tentatives - ${this.attempts}`);
    return this.attempts;
  }

  getTarget(): number {
    console.log(`cible: Nb cible actuel - ${this.target}`);
    return this.target;
  }

  setTarget(target: number): void {
    console.log(`définir cible: Nb cible défini à ${target}`);
    this.target = target;
  }
}
