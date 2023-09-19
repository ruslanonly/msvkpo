import { Textarea } from '@mui/joy'
import { ChessOrderForm, ChessOrderFormType } from 'entities/ChessOrder/Form'
import { chessBothSequences } from 'entities/ChessOrder/Sequences'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { FormItem, Gap } from 'shared'

export function ChessOrder() {
  const methods = useForm<ChessOrderFormType>()
  const { watch } = methods

  const { firstSeq, secondSeq } = watch()

  const resultedSequence = useMemo(() => {
    if (firstSeq && secondSeq)
      return chessBothSequences(firstSeq, secondSeq)

    if (!firstSeq) return secondSeq
    else return firstSeq
    
  }, [firstSeq, secondSeq])

  return (
    <>
      <ChessOrderForm methods={methods}/>

      <Gap size={2}/>

      <FormItem top='Переставленные в шахматном порядке слова'>
        <Textarea 
        disabled
        value={resultedSequence}
        variant='solid'/>
      </FormItem>
    </>
  )
}
