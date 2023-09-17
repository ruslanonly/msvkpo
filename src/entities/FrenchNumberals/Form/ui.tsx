import { UseFormReturn } from "react-hook-form"
import { FormItem, Input } from "shared"

export type FrenchNumeralsFormType = {
  numeral: string
}

type FrenchNumeralsFormProps = {
  methods: UseFormReturn<FrenchNumeralsFormType>,
}

export function FrenchNumeralsForm(props: FrenchNumeralsFormProps) {
  const { control } = props.methods
  return (
    <div>
      <FormItem 
      top="Числительное на франзузском языке">
        <Input
        placeholder="Впишите число на французском языке"
        name="numeral"
        control={control}/>
      </FormItem>
    </div>
  )
}
