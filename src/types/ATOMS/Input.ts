import { ChangeEventHandler, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute,  ReactNode } from "react"
import { RegisterOptions } from "react-hook-form"

export interface TInput{
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
  isInputMask?:boolean



    
}