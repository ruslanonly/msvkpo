import { FrenchNumeralsForm, FrenchNumeralsFormType } from "entities/FrenchNumberals/Form";
import { useForm } from "react-hook-form";


export function FrenchNumerals() {
  const methods = useForm<FrenchNumeralsFormType>()
  const { watch } = methods
  return (
    <>
      <FrenchNumeralsForm methods={methods}/>

      <div>
        {watch().numeral}
      </div>
    </>
  )
}
