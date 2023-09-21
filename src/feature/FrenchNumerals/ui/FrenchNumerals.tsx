import { Lexer, Parser } from "entities/FrenchNumberals/Compiler";
import { FrenchNumeralsForm, FrenchNumeralsFormType } from "entities/FrenchNumberals/Form";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


export function FrenchNumerals() {
  const methods = useForm<FrenchNumeralsFormType>({
    defaultValues: {
      numeral: ''
    }
  })
  const { watch } = methods

  useEffect(() => {
    const lexer = new Lexer(watch().numeral)
    try {
      const parser = new Parser(lexer.tokenize())
      console.log('parse', lexer.tokens, parser.parse())

    } catch (error) {
      console.error(error)
    }
  }, [watch().numeral])

  return (
    <>
      <FrenchNumeralsForm methods={methods}/>

      <div>
        {watch().numeral}
      </div>
    </>
  )
}
