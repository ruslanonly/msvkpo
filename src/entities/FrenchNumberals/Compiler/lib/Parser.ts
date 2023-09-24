import { CENT, DIX, FROM_ELEVENT_TO_SIXTEEN, SOIXANTE, UNITS, VINGT, dictionary } from "../var/dictionary";
import { Token, TokenType } from "./Lexer";

export class Parser {
  tokens: Token[]
  L: number // tokens length
  
  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.L = tokens.length
  }

  private expectTokensLength(maxLength: number, errorMessage: string) {
    if (this.tokens.length > maxLength) throw new Error(errorMessage)
  }

  private parseZeroCase() {
    this.expectTokensLength(1, "После zero не может быть слов")
    return 0
  }

  private parseDix(start: number) {
    const second = this.tokens[start + 1]

    this.expectTokensLength(start + 2, `После dix ${second?.value} не может быть слов`)

    if (this.L === start + 1) {
      return 10
    } else if (this.L === start + 2) {
      if (UNITS.slice(-3).includes(second.value)) {
        return 10 + dictionary[second.value]
      } else {
        throw new Error(`Слово ${second.value} не может идти после dix`)
      }
    } else return 0
  }

  private parseFromElevenToSixteen(start: number) {
    const second = this.tokens[start + 1]

    this.expectTokensLength(start + 2, `После dix ${second?.value} не может быть слов`)

    return dictionary[this.tokens[start].value]
  }

  private parseSoixanteCase(start: number) {
    const first = this.tokens[start + 0]
    const second = this.tokens[start + 1]

    if (this.L === start + 1) {
      return 60
    } else if (this.L === start + 2) {
      if (second.type === TokenType.Unit) return dictionary[first.value] + dictionary[second.value]
      else if (FROM_ELEVENT_TO_SIXTEEN.includes(second.value)) {
        return 60 + this.parseFromElevenToSixteen(start + 1)
      } else if (second.value === DIX) {
        return 60 + this.parseDix(start + 1)
      } else throw new Error(`После ${first.value} может идти только 11 - 16 или dix и 7 - 9`) 

    } else if (this.L === start + 3) {
      if (second.type === TokenType.Unit) return dictionary[first.value] + dictionary[second.value]
      else if (FROM_ELEVENT_TO_SIXTEEN.includes(second.value)) {
        return 60 + this.parseFromElevenToSixteen(start + 1)
      } else if (second.value === DIX) {
        return 60 + this.parseDix(start + 1)
      } else throw new Error(`После ${first.value} может идти только 11 - 16 или dix и 7 - 9`)

    }

    this.expectTokensLength(start + 3, `После dix ${second?.value} не может быть слов`)

    return 0
  }

  private parseSimpleTensCase(start: number) {
    const first = this.tokens[start + 0]
    const second = this.tokens[start + 1]

    if (this.L === start + 1) return dictionary[first.value]
    else if (this.L === start + 2) {
      if (second.type === TokenType.Unit) return dictionary[first.value] + dictionary[second.value]
      else throw new Error(`После десятков (20 - 60) не должно быть слова ${second.value}`)
    }

    this.expectTokensLength(start + 2, `После ${first.value} ${second.value} не может быть слов`)

    return 0
  }

  private parseQuatreCase(start: number) {
    const second = this.tokens[start + 1]
    const third = this.tokens[start + 2]
    if (this.L === start + 1) {
      return 4
    } else if (this.L === start + 2) {

      if (second.type === TokenType.Vingts) return 80
      else if (second.value === VINGT) throw new Error("После vingts должны быть единицы или 10 - 19")
      else if (second.value === CENT) return 400
      throw new Error(`После quatre не может идти числительного ${second.value}`)

    } else {

      if (second.type === TokenType.Vingts) {
        this.expectTokensLength(start + 2, `После vingts не может быть слов`)
        return 80
      }
      else if (second.value === VINGT) {
        if (third.type === TokenType.Unit) {
          this.expectTokensLength(start + 3, `После ${third.value} не может быть слов`)
          return 80 + dictionary[third.value]
        } else if (third.type === TokenType.FromElevenToSixteen) {
            return 80 + this.parseFromElevenToSixteen(start + 2)
        } else if (third.value === DIX) {
            return 80 + this.parseDix(start + 2)
        }
        else throw new Error(`После vingt не может идти ${third.value}`)
      } else if (second.value === CENT) return this.parseCentCase(start + 1, 4)
      else throw new Error(`После quatre не может идти числительного ${second.value}`)

    }
  }
  
  private parseUnitCase(start: number) {
    const first = this.tokens[start]
    const second = this.tokens[start + 1]

    if (this.L === start + 1) {
      this.expectTokensLength(start + 1, "После единиц не может быть слов")
      return dictionary[first.value]
    } else {
      let value = 0;

      if (start === 0 && first.value === UNITS[1]) throw new Error("После un не может быть слов")

      if (second.type !== TokenType.Cent) throw new Error("После единиц должен быть cent (сотня)")
      
      value = this.parseCentCase(start + 1, dictionary[first.value])
      return value
    }
  }

  parseCentCase(start: number, multiplyHundred: number) {
    let value = 0

    const first = this.tokens[start]
    const second = this.tokens[start + 1]

    if (first.type !== TokenType.Cent) throw new Error("После единиц должен быть cent (сотня)")
    
    value = multiplyHundred * 100
    if (this.L === start + 1) return value

    switch(second.type) {
      case TokenType.Dix: {
        value += this.parseDix(start + 1)
        break;
      }
      case TokenType.FromElevenToSixteen: {
        value += this.parseFromElevenToSixteen(start + 1)
        break;
      }
      case TokenType.Unit: {
        switch(second.value) {
          case UNITS[4]: {
            value += this.parseQuatreCase(start + 1)
            break;
          }
          default: {
            value += this.parseUnitCase(start + 1)
            break;
          }
        }
        break;
      }
      case TokenType.SimpleTens: {
        switch(second.value) {
          case SOIXANTE: {
            value += this.parseSoixanteCase(start + 1)
            break;
          }
          default: {
            value += this.parseSimpleTensCase(start + 1)
            break;
          }
        }
        break;
      }
      default: {
        throw new Error(`После сотни не может идти слово ${second.value}`)
      }
    }
    return value
  }

  parse() {
    let value = 0
    const tns = this.tokens
    const tokensAmount = tns.length
    if (tokensAmount < 1) throw new Error("Слов не найдено")

    const first = tns[0]

    switch(first.type) {
      case TokenType.Zero: {
        value = this.parseZeroCase()
        break;
      }
      case TokenType.Dix: {
        value = this.parseDix(0)
        break;
      }
      case TokenType.FromElevenToSixteen: {
        value = this.parseFromElevenToSixteen(0)
        break;
      }
      case TokenType.Cent: {
        value = this.parseCentCase(0, 1);
        break;
      }
      case TokenType.Unit: {
        switch(first.value) {
          case UNITS[4]: {
            value = this.parseQuatreCase(0)
            break;
          }
          default: {
            value = this.parseUnitCase(0)
            break;
          }
        }
        break;
      }
      case TokenType.SimpleTens: {

        switch(first.value) {
          case SOIXANTE: {
            value = this.parseSoixanteCase(0)
            break;
          }
          default: {
            value = this.parseSimpleTensCase(0)
            break;
          }
        }
        break;
      }
    }

    return value
  }
}