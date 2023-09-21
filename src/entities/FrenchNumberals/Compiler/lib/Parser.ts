import { DIX, FROM_ELEVENT_TO_SIXTEEN, SOIXANTE, UNITS, dictionary } from "../var/dictionary";
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

  private parseSoixanteCase() {
    const first = this.tokens[0]
    const second = this.tokens[1]
    const third = this.tokens[2]

    if (this.L === 1) {
      return 60
    } else if (this.L === 2) {

      if (FROM_ELEVENT_TO_SIXTEEN.includes(second.value)) {
        return 60 + dictionary[second.value]
      } else if (second.value === DIX) {
        return 60 + dictionary[second.value]
      } else throw new Error(`После ${first.value} может идти только 11 - 16 или dix и 7 - 9`) 

    } else if (this.L === 3) {

      if (FROM_ELEVENT_TO_SIXTEEN.includes(second.value)) {
        return 60 + dictionary[second.value]
      } else if (second.value === DIX) {
        if (UNITS.slice(-3).includes(third.value)) return 60 + 10 + dictionary[third.value]
        else throw new Error("После dix должна быть единица (7 - 9)")
      } else throw new Error(`После ${first.value} может идти только 11 - 16 или dix и 7 - 9`)

    }

    this.expectTokensLength(3, `После dix ${second?.value} не может быть слов`)

    return 0
  }

  private parseSimpleTensCase() {
    const first = this.tokens[0]
    const second = this.tokens[1]

    if (this.L === 1) return dictionary[first.value]
    else if (this.L === 2) {
      if (second.type === TokenType.Unit) return dictionary[first.value] + dictionary[second.value]
      else throw new Error(`После десятков (20 - 60) не должно быть слова ${second.value}`)
    }

    this.expectTokensLength(2, `После ${first.value} ${second.value} не может быть слов`)

    return 0
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
        value = 100;
        break;
      }
      case TokenType.Unit: {
        switch(first.value) {
          case UNITS[4]: {
            break;
          }
        }
        break;
      }
      case TokenType.SimpleTens: {

        switch(first.value) {
          case SOIXANTE: {
            value = this.parseSoixanteCase()
            break;
          }
          default: {
            value = this.parseSimpleTensCase()
            break;
          }
        }
        break;
      }
    }

    return value
  }
}