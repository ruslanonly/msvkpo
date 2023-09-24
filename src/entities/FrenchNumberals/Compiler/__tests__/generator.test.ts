import { Generator } from "../lib/Generator";

const testData = [
  "zero",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
  "dix-sept",
  "dix-huit",
  "dix-neuf",
  "vingt",
  "vingt et un",
  "vingt-deux",
  "vingt-trois",
  "vingt-quatre",
  "vingt-cinq",
  "vingt-six",
  "vingt-sept",
  "vingt-huit",
  "vingt-neuf",
  "trente",
  "trente et un",
  "trente-deux",
  "trente-trois",
  "trente-quatre",
  "trente-cinq",
  "trente-six",
  "trente-sept",
  "trente-huit",
  "trente-neuf",
  "quarante",
  "quarante et un",
  "quarante-deux",
  "quarante-trois",
  "quarante-quatre",
  "quarante-cinq",
  "quarante-six",
  "quarante-sept",
  "quarante-huit",
  "quarante-neuf",
  "cinquante",
  "cinquante et un",
  "cinquante-deux",
  "cinquante-trois",
  "cinquante-quatre",
  "cinquante-cinq",
  "cinquante-six",
  "cinquante-sept",
  "cinquante-huit",
  "cinquante-neuf",
  "soixante",
  "soixante et un",
  "soixante-deux",
  "soixante-trois",
  "soixante-quatre",
  "soixante-cinq",
  "soixante-six",
  "soixante-sept",
  "soixante-huit",
  "soixante-neuf",
  "soixante-dix",
  "soixante onze",
  "soixante-douze",
  "soixante-treize",
  "soixante-quatorze",
  "soixante-quinze",
  "soixante-seize",
  "soixante-dix-sept",
  "soixante-dix-huit",
  "soixante-dix-neuf",
  "quatre-vingts",
  "quatre-vingt-un",
  "quatre-vingt-deux",
  "quatre-vingt-trois",
  "quatre-vingt-quatre",
  "quatre-vingt-cinq",
  "quatre-vingt-six",
  "quatre-vingt-sept",
  "quatre-vingt-huit",
  "quatre-vingt-neuf",
  "quatre-vingt-dix",
  "quatre-vingt-onze",
  "quatre-vingt-douze",
  "quatre-vingt-treize",
  "quatre-vingt-quatorze",
  "quatre-vingt-quinze",
  "quatre-vingt-seize",
  "quatre-vingt-dix-sept",
  "quatre-vingt-dix-huit",
  "quatre-vingt-dix-neuf",
  "cent",
  "cent un",
  "cent deux",
  "cent trois",
  "cent quatre",
  "cent cinq",
  "cent six",
  "cent sept",
  "cent huit",
  "cent neuf",
  "cent dix",
  "cent onze",
  "cent douze",
  "cent treize",
  "cent quatorze",
  "cent quinze",
  "cent seize",
  "cent dix-sept",
  "cent dix-huit",
  "cent dix-neuf",
  "cent vingt",
  "cent vingt et un",
  "cent vingt-deux",
  "cent vingt-trois",
  "cent vingt-quatre",
  "cent vingt-cinq",
  "cent vingt-six",
  "cent vingt-sept",
  "cent vingt-huit",
  "cent vingt-neuf",
  "cent trente",
  "cent trente et un",
  "cent trente-deux",
  "cent trente-trois",
  "cent trente-quatre",
  "cent trente-cinq",
  "cent trente-six",
  "cent trente-sept",
  "cent trente-huit",
  "cent trente-neuf",
  "cent quarante",
  "cent quarante et un",
  "cent quarante-deux",
  "cent quarante-trois",
  "cent quarante-quatre",
  "cent quarante-cinq",
  "cent quarante-six",
  "cent quarante-sept",
  "cent quarante-huit",
  "cent quarante-neuf",
  "cent cinquante",
  "cent cinquante et un",
  "cent cinquante-deux",
  "cent cinquante-trois",
  "cent cinquante-quatre",
  "cent cinquante-cinq",
  "cent cinquante-six",
  "cent cinquante-sept",
  "cent cinquante-huit",
  "cent cinquante-neuf",
  "cent soixante",
  "cent soixante et un",
  "cent soixante-deux",
  "cent soixante-trois",
  "cent soixante-quatre",
  "cent soixante-cinq",
  "cent soixante-six",
  "cent soixante-sept",
  "cent soixante-huit",
  "cent soixante-neuf",
  "cent soixante-dix",
  "cent soixante-onze",
  "cent soixante-douze",
  "cent soixante-treize",
  "cent soixante-quatorze",
  "cent soixante-quinze",
  "cent soixante-seize",
  "cent soixante-dix-sept",
  "cent soixante-dix-huit",
  "cent soixante-dix-neuf",
  "cent quatre-vingts",
  "cent quatre-vingt-un",
  "cent quatre-vingt-deux",
  "cent quatre-vingt-trois",
  "cent quatre-vingt-quatre",
  "cent quatre-vingt-cinq",
  "cent quatre-vingt-six",
  "cent quatre-vingt-sept",
  "cent quatre-vingt-huit",
  "cent quatre-vingt-neuf",
  "cent quatre-vingt-dix",
  "cent quatre-vingt-onze",
  "cent quatre-vingt-douze",
  "cent quatre-vingt-treize",
  "cent quatre-vingt-quatorze",
  "cent quatre-vingt-quinze",
  "cent quatre-vingt-seize",
  "cent quatre-vingt-dix-sept",
  "cent quatre-vingt-dix-huit",
  "cent quatre-vingt-dix-neuf",
  "deux cent",
]

testData.forEach((item, index) => {
  it(`should convert "${item}" to ${index}`, () => {
    const generator = new Generator();
    const result = generator.generate(item);
    expect(result).toBe(index);
  });
});