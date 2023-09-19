export const enum TokenType {
  Zero,
  Unit, // 1 - 9
  Quatre, // 4
  Dix, // dix
  FromElevenToSixteen, // (17 | 18 | 19) = Dix + Unit
  SimpleTens, // 20 - 60 (Hard Tend are complex)
  Cent
}

const UNITS = [
  "zero",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf"
]
const DIX = "dix"
const FROM_ELEVENT_TO_SIXTEEN = [
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize"
]
const SIMPLE_TENS = [
  "vingt",
  "trente",
  "quarante",
  "cinquante",
  "soixante"
]
const CENT = "cent"

export type Token = {
  type: TokenType,
  value: string
}

export class Lexer {
  private input: string
  tokens: Token[]
  private currentPosition: number

  constructor(input: string) {
    this.input = input.trim().toLowerCase(); // Приводим к нижнему регистру для унификации
    this.tokens = [];
    this.currentPosition = 0;
  }

  private addToken(type: TokenType, value: string) {
    this.tokens.push({ type, value });
  }

  private skipWhitespace() {
    while (this.currentPosition < this.input.length) {
      const char = this.input[this.currentPosition];
      if (char === ' ') {
        this.currentPosition++;
      } else {
        break;
      }
    }
  }

  private parseWord() {
    let word = '';
    while (this.currentPosition < this.input.length) {
      const char = this.input[this.currentPosition];
      if (char.match(/[a-z]/)) {
        word += char;
        this.currentPosition++;
      } else {
        throw new Error(`Неизвестный символ ${char}`)
      }
    }
    return word;
  }

  tokenize() {
    while (this.currentPosition < this.input.length) {
      const word = this.parseWord();
      if (word) {
        switch(true) {
          case word === UNITS[0]: {
            this.addToken(TokenType.Zero, word); break;
          }
          case word === UNITS[4]: {
            this.addToken(TokenType.Quatre, word); break;
          }
          case UNITS.includes(word): {
            this.addToken(TokenType.Unit, word); break;
          }
          case word === DIX: {
            this.addToken(TokenType.Dix, word); break;
          }
          case FROM_ELEVENT_TO_SIXTEEN.includes(word): {
            this.addToken(TokenType.FromElevenToSixteen, word); break;
          }
          case SIMPLE_TENS.includes(word): {
            this.addToken(TokenType.SimpleTens, word); break;
          }
          case word === CENT: {
            this.addToken(TokenType.Cent, word); break;
          }
          default: {
            throw new Error(`Неизвестное слово: ${word}`)
          }
        }
      } else {
        console.error('Неизвестный символ:', this.input[this.currentPosition]);
        this.currentPosition++;
      }

      this.skipWhitespace();
    }
    return this.tokens;
  }
}