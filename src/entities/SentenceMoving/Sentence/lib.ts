export function moveSentencePart(sentence: string, a: number, b: number): string {
  const splited = sentence.split(" ")
  const sliced = splited.splice(a, b - a + 1)
  return [...sliced, ...splited].join(' ')
}