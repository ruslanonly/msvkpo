import { ControllerProps, useController } from "react-hook-form";

import { Input as MUIINPUT, InputProps } from "@mui/joy";

export const Input = (props: Omit<InputProps & ControllerProps, "render">) => {
  const { field: { ref, onChange, value } } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules
  })

  return (
    <MUIINPUT 
    ref={ref}
    onChange={onChange}
    value={value}/>
  )
}