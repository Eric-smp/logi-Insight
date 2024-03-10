import { ChangeEventHandler, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode } from "react"

export interface TMaterialInputMask{
  width:string
  heigth:string
  placeholder:string,
  label: string
  type:HTMLInputTypeAttribute
  backgroundColor?: string
  color?:string
  icon?: ReactNode 
  backgroundLalbe?:string
  autoComplete?:HTMLInputAutoCompleteAttribute
  id: string | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  register?: any
  name?: string | undefined
  rightSideIcon?: ReactNode
  defaultValue?: any
  disabled?: boolean
  maskPattern: string
  error?: string | null
  value?: any
  onBlur?: (event: any) => any
  isFocused?: boolean

}

export type TInputMask = {
  register?: any
  type?: string
  placeholder: string
  textArea?: boolean
  dateInput?: boolean
  mask?: boolean
  maskPattern?: string
  teste?: any
  value?: any
  defaultValue?: any
  onChange?: (event: any) => any
}