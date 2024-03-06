import { Dispatch, ReactNode, SetStateAction } from "react"

export type TProviderGlobal ={
    isModalOpen:boolean,
    setIsModalOpen:Dispatch<SetStateAction<boolean>>
    modalType:number,
    setModalType:Dispatch<SetStateAction<number>>

}

export interface ChildrenType {
    children: ReactNode
}