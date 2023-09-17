import { ControllerProps, FieldValues, useController } from "react-hook-form";

import { Input as MUIINPUT, InputProps as MUIInputProps } from "@mui/joy";

type InputProps<TFieldValues extends FieldValues> = Omit<MUIInputProps & ControllerProps<TFieldValues>, "render">

export const Input = <TFieldValues extends FieldValues>(props: InputProps<TFieldValues>) => {
  const { field: { ref, onChange, value } } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules
  })

  return (
    <MUIINPUT 
    {...props}
    ref={ref}
    onChange={onChange}
    value={value || ''}/>
  )
}