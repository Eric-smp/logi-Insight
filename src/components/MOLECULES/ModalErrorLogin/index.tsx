import {X} from 'lucide-react'
import { Button } from '@/components'
import * as Styles from './styles'
import { useGlobal } from '@/provider/Global/GlobalProvider'

export function ModalErrorLogin() {
    const {setIsModalOpen} = useGlobal()
    return (
        <Styles.ContentModalError>
            <span>

            <X color='#0070f3' onClick={() => setIsModalOpen(false)} />
            </span>
            <h1>CNPJ ou Senha incorretos</h1>

            <Button text={'Tentar novamente'} heigth={''} width={''} type={'button'} id={undefined} onClick={() => setIsModalOpen(false)}/>
        </Styles.ContentModalError>
    )
}