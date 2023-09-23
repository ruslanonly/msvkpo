import { Lexer, Parser } from "entities/FrenchNumberals/Compiler";
import { FrenchNumeralsForm, FrenchNumeralsFormType } from "entities/FrenchNumberals/Form";
import { useMemo } from "react";
import { useForm } from "react-hook-form";


export function FrenchNumerals() {
  const methods = useForm<FrenchNumeralsFormType>({
    defaultValues: {
      numeral: ''
    }
  })
  const { watch } = methods

  const numeral = useMemo(() => {
    const lexer = new Lexer(watch().numeral)
    try {
      const parser = new Parser(lexer.tokenize())
      const parsed = parser.parse()
      methods.clearErrors("numeral")
      return parsed
    } catch (_error) {
      const error: Error = _error as Error
      methods.setError("numeral", {
        type: "value",
        message: error.message
      })
    }
  }, [watch().numeral])

  return (
    <>
      <FrenchNumeralsForm methods={methods}/>

      <div>{numeral}</div>
    </>
  )
}
