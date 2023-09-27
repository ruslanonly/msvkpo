import { Textarea } from '@mui/joy'
import { SentenceMovingForm, SentenceMovingFormType } from 'entities/SentenceMoving/Form'
import { moveSentencePart } from 'entities/SentenceMoving/Sentence'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { FormItem, Gap } from 'shared'

export function SentenceMoving() {
  const methods = useForm<SentenceMovingFormType>()
  const { watch } = methods

  const { a, b, sentence } = watch()

  const resultedSentence = useMemo(() => {
    const wordsAmount = sentence.split(" ").length
    const start = parseInt(a as unknown as string), end = parseInt(b as unknown as string) 

    if (!isNaN(start) && !isNaN(end) && sentence) {
      let isError = false
      if (start < 1) {
        isError = true
        methods.setError("a", {message: "А должно быть больше 0"})
      }
      if (end < 1) {
        isError = true
        methods.setError("b", {message: "B должно быть больше 0"})
      }
      if (end > wordsAmount) {
        isError = true
        methods.setError("b", { message: "Число B не может быть больше количества слов" })
      }
      if (start >= end) {
        isError = true
        methods.setError("a", {message: "A должно быть меньше B"})
        methods.setError("b", {message: "B должно быть больше A"})
      }
      if (isError) return ''
      methods.clearErrors()
      return moveSentencePart(sentence, start, end)
    }
    
  }, [sentence, a, b])

  return (
    <>
      <SentenceMovingForm methods={methods}/>

      <Gap size={2}/>

      <FormItem top='Результат'>
        <Textarea
        value={resultedSentence}
        variant='plain'/>
      </FormItem>
    </>
  )
}
