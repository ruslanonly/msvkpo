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
    const start = parseInt(a), end = parseInt(b) 

    if (!isNaN(start) && !isNaN(end) && sentence) 
    return moveSentencePart(sentence, start, end)
    
  }, [sentence, a, b])

  return (
    <>
      <SentenceMovingForm methods={methods}/>

      <Gap size={2}/>

      <FormItem top='Результат'>
        <Textarea
        disabled
        value={resultedSentence}
        variant='solid'/>
      </FormItem>
    </>
  )
}
