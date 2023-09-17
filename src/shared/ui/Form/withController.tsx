import React, { ComponentType } from 'react'
import { FieldValues, useController } from 'react-hook-form'
import { ControllerProps } from '../../types'

type PropsBase<TElement extends HTMLElement> = {
  onChange?: React.ChangeEventHandler<TElement>,
  value?: string | number | readonly string[],
  status?: "error" | "default" | "valid",
}

export function withController<
  TElement extends HTMLElement,
  Props extends PropsBase<TElement>
>(Component: ComponentType<Props>) {
  return function <TFieldValues extends FieldValues>({ control, name, rules, ...props }: (Omit<Props, keyof PropsBase<TElement>> & ControllerProps<TFieldValues>)) {

    const { field: { ref, onChange, value }, fieldState: { invalid } } = useController({
      name,
      control,
      rules
    })

    const componentProps = {
      ...props,
      getRootRef: ref,
      onChange: onChange(value),
      value: value,
      status: invalid ? 'error' : 'default'
    }

    return (
      <Component {...componentProps as unknown as Props} />
    )
  }
}