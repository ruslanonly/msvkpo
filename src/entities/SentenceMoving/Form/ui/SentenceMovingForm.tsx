import { UseFormReturn } from "react-hook-form"
import { FormItem, Input } from "shared"

import styles from "./SentenceMovingForm.module.less"

export type SentenceMovingFormType = {
  sentence: string,
  a: number
  b: number
}

type SentenceMovingFormProps = {
  methods: UseFormReturn<SentenceMovingFormType>,
}

export function SentenceMovingForm(props: SentenceMovingFormProps) {
  const { control, formState: { errors }, watch } = props.methods
  const { sentence } = watch()
  return (
    <div>
      <FormItem 
      top="Предложение">
        <Input
        placeholder="Напишите что-нибудь..."
        name="sentence"
        control={control}/>
      </FormItem>

      <div className={styles["A-B-wrapper"]}>
        <FormItem 
        top="A"
        bottom="Номер слова, с которого начинается последовальность, которая переставляется в начало предложения"
        error={errors.a?.message || ''}>
          <Input
          disabled={!sentence?.length}
          type="number"
          placeholder="Напишите что-нибудь..."
          name="a"
          control={control}/>
        </FormItem>

        <FormItem 
        bottom="Номер слова, которым заканчивается последовальность, которая переставляется в начало предложения"
        top="B"
        error={errors.b?.message || ''}>
          <Input
          disabled={!sentence?.length}
          type="number"
          placeholder="Напишите что-нибудь..."
          name="b"
          control={control}/>
        </FormItem>
      </div>
    </div>
  )
}
