const CENT = "cent"
const ZERO = "zero"
const DIX = "dix"

const oneToNine = [
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
]

const eleventToSixteen = [
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize"
]

const frenchNumbers = {
  ZERO: 0,
  "un": 1,
  "deux": 2,
  "trois": 3,
  "quatre": 4,
  "cinq": 5,
  "six": 6,
  "sept": 7,
  "huit": 8,
  "neuf": 9,
  "dix": 10,
  "onze": 11,
  "douze": 12,
  "treize": 13,
  "quatorze": 14,
  "quinze": 15,
  "seize": 16,
  "vingt": 20,
  "trente": 30,
  "quarante": 40,
  "cinquante": 50,
  "soixante": 60,
  "soixante-dix": 70,
  "quatre-vingts": 80,
  "quatre-vingt-dix": 90,
  CENT: 100,
}

class ParseTreeNode {
  values: string[]
  children?: ParseTreeNode[]


  constructor(values: string[], children?: ParseTreeNode[]) {
    this.values = values
    this.children = children
  }

  parseWord(word: string) {
    this.values.includes(word)
  }
}

export function frenchWordsToNumber(inputString: string): number {
  const words = inputString.trim().replace(/ +/g, ' ').toLowerCase().split(' ')

  let number = 0

  return number
}