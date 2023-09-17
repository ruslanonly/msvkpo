import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

export type ControllerProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>,
  control: Control<TFieldValues>,
  rules?: Omit<RegisterOptions<TFieldValues>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">,
}