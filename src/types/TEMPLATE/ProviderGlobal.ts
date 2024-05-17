import { Dispatch, ReactNode, SetStateAction } from "react"
import {TCreateUser, TUserLogin,TCreateProduct} from '@/types'

export type TProviderGlobal ={
    isModalOpen:boolean,
    setIsModalOpen:Dispatch<SetStateAction<boolean>>
    modalType:number,
    setModalType:Dispatch<SetStateAction<number>>,

    handleGetUser: ({nome, sobrenome, cnpj, senha }:TCreateUser) => void
    loginUser: ({cnpj, senha}:TUserLogin) => void

    password: string,
    setPassword: Dispatch<SetStateAction<string>>
    
    handleCreateProdut: ({nomeProduto,quantidade}:TCreateProduct) => void

    notificationLogin: boolean,
    setNotificationLogin: Dispatch<SetStateAction<boolean>>

    notificationProduct: boolean,
    setNotificationProduct: Dispatch<SetStateAction<boolean>>
}

export interface ChildrenType {
    children: ReactNode
}