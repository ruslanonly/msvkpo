import { Lexer } from "entities/FrenchNumberals/Compiler";
import { FrenchNumeralsForm, FrenchNumeralsFormType } from "entities/FrenchNumberals/Form";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


export function FrenchNumerals() {
  const methods = useForm<FrenchNumeralsFormType>()
  const { watch } = methods

  useEffect(() => {
    const lexer = new Lexer(watch().numeral || 'cent')
    try {
      console.log(lexer.tokenize())
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
