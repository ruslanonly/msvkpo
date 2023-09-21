import { CENT, DIX, FROM_ELEVENT_TO_SIXTEEN, SIMPLE_TENS, UNITS } from "../var/dictionary"

export const enum TokenType {
  Zero,
  Unit, // 1 - 9
  Dix, // dix
  FromElevenToSixteen, // (17 | 18 | 19) = Dix + Unit
  SimpleTens, // 20 - 60 (Hard Tend are complex)
  Cent
}

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

      if (char === " ") break;
      else {
        if (char.match(/[a-z]/)) {
          word += char;
          this.currentPosition++;
        } else {
          throw new Error(`Неизвестный символ ${char}`)
        }
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
            console.log(word, CENT, word === CENT)
            this.addToken(TokenType.Cent, word); break;
          }
          default: {
            throw new Error(`Неизвестное слово: ${word}`)
          }
        }
      } else {
        this.currentPosition++;
      }

      this.skipWhitespace();
    }
    return this.tokens;
  }
}