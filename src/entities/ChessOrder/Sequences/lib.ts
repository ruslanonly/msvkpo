export function chessBothSequences(firstSequence: string, secondSequence: string): string {
  const [firstArray, secondArray] = [firstSequence, secondSequence].map((seq) => {
    return seq.trim().replace(/ +/g, ' ').toLowerCase().split(' ')
  })

  const resultedArray: string[] = []

  const minLength = Math.min(firstArray.length, secondArray.length)
  
  for(let i = 0; i < minLength; i++) {
    resultedArray.push(firstArray[i], secondArray[i])
  }

  if (minLength === firstArray.length) resultedArray.push(...secondArray.slice(minLength - secondArray.length))
  else resultedArray.push(...firstArray.slice(minLength - firstArray.length))

  return resultedArray.join(' ')
}