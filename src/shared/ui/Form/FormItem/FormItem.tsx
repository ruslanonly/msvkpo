import { FormControl, FormLabel, FormHelperText,  } from "@mui/joy"

type FormItemProps = React.PropsWithChildren & {
  top?: string
  error?: string,
  bottom?: string
}

export function FormItem(props: FormItemProps) {
  return (
    <FormControl error={!!props.error}>
      <FormLabel>{props.top}</FormLabel>
      {props.children}
      <FormHelperText>
        {props.error ? props.error : props.bottom}
      </FormHelperText>
    </FormControl>
  )
}
