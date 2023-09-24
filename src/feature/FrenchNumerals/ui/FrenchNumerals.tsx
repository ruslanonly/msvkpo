import { Generator } from "entities/FrenchNumberals/Compiler";
import { FrenchNumeralsForm, FrenchNumeralsFormType } from "entities/FrenchNumberals/Form";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

import styles from "./FrenchNumerals.module.less"

export function FrenchNumerals() {
  const methods = useForm<FrenchNumeralsFormType>({
    defaultValues: {
      numeral: ''
    }
  })


  const { watch, formState: { errors } } = methods

  const { numeral: numeralInput } = watch()

  const numeral = useMemo(() => {
    const generator = new Generator()
    try {
      const generated = generator.generate(numeralInput)
      methods.clearErrors("numeral")
      return generated
    } catch (_error) {
      const error: Error = _error as Error
      methods.setError("numeral", {
        type: "value",
        message: error.message
      })
    }
  }, [numeralInput, methods])

  return (
    <>
      <FrenchNumeralsForm methods={methods}/>

      <div className={styles['number-wrapper']}>
        {!errors.numeral && <span className={styles.number}>{numeral}</span>}
      </div>
    </>
  )
}
