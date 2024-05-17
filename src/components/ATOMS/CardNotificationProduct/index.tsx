import {Check} from 'lucide-react'
import * as Styles from './styles'
import { useGlobal } from '@/provider/Global/GlobalProvider'

export function CardNotificationProduct() {

    const {notificationProduct} = useGlobal()
    return (
        <>
            {
                notificationProduct  ? (

                    <Styles.Card>
                    <Check/>
                    <h1>Produto salvo com sucesso!</h1>
                </Styles.Card>
                )
                :null
            }
           
        </>
    )
}