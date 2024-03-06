import { MouseEventHandler } from "react"

export interface TButton{
    text:string,
    heigth:string
    width:string
    backgroundColor?:string
    backgroundColorHover?: string
    color?: string
    colorHover?:string
    type: "button" | "submit" | "reset" | undefined
    id: string | undefined
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}