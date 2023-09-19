import { Token } from "./Lexer";

export class Parser {
  tokens: Token[]
  currentTokenIndex: number
  
  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.currentTokenIndex = 0;
  }

  parse() {
    const result = this.parseNumber();
    
    if (this.currentTokenIndex !== this.tokens.length) {
      throw new Error('Неожиданный токен: ' + this.tokens[this.currentTokenIndex].value);
    }

    return result;
  }

  private parseNumber() {
    const currentToken = this.tokens[this.currentTokenIndex];


    throw new Error('Ожидалось численное значение, получено: ' + currentToken.value);
  }
}