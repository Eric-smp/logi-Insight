import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute,  ReactNode } from "react"

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

    
}