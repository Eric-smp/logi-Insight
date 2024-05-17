import { useGlobal } from '@/provider/Global/GlobalProvider'
import * as Styles from './styles'
import {Check} from 'lucide-react'
export function CardNotificationLogin() {
    const {notificationLogin} = useGlobal()
    return (
        <>
            {
                notificationLogin ? 
                    (
                
                        <Styles.Card>
            <Check/>
            <h1>Conta criada com sucesso!</h1>
       </Styles.Card>
        )
        : null
}
            </>
    )
}