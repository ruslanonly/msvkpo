import { UseFormReturn } from "react-hook-form"
import { FormItem, Input } from "shared"

export type ChessOrderFormType = {
  firstSeq: string,
  secondSeq: string
}

type ChessOrderFormProps = {
  methods: UseFormReturn<ChessOrderFormType>,
}

export function ChessOrderForm(props: ChessOrderFormProps) {
  const { control } = props.methods
  return (
    <div>
      <FormItem 
      top="Первая последовательность слов">
        <Input
        placeholder="Напишите что-нибудь..."
        name="firstSeq"
        control={control}/>
      </FormItem>

      <FormItem 
      top="Вторая последовательность слов">
        <Input
        placeholder="Напишите что-нибудь..."
        name="secondSeq"
        control={control}/>
      </FormItem>
    </div>
  )
}
