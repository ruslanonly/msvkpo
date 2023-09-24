import { Parser } from "..";
import { Lexer } from "./Lexer";

export class Generator {
  generate(input: string) {
    if (!input) return

    const lexer = new Lexer(input)
    const tokens = lexer.tokenize()
    
    const parser = new Parser(tokens)
    const parsed = parser.parse()
    return parsed
  }
}