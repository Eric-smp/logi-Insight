import { Dispatch, ReactNode, SetStateAction } from "react"
import {TCreateUser, TUserLogin} from '@/types'

export type TProviderGlobal ={
    isModalOpen:boolean,
    setIsModalOpen:Dispatch<SetStateAction<boolean>>
    modalType:number,
    setModalType:Dispatch<SetStateAction<number>>,

    handleGetUser: ({nome, sobrenome, cnpj, senha }:TCreateUser) => void
    loginUser: ({cnpj, senha}:TUserLogin) => void

}

export interface ChildrenType {
    children: ReactNode
}