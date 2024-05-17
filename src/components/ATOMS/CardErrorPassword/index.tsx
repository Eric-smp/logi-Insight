import { Check, X } from 'lucide-react'
import * as Styles from './styles'

type TCardErrorPassword = {
    letraMaiscula: boolean,
    numero: boolean,
    caracterEspecial: boolean,
    minimoCaracter: boolean
}

export function CardErrorPassword(props:TCardErrorPassword) {
    return (
        <Styles.ContentCardErro>
            <div>
                {
                    props.letraMaiscula ? <Check className='svgCheck' /> : <X  className='svgX'/>
                }
                
            <h3>1 Letra Maiuscula</h3>
            </div>
            <div>
                {
                    props.numero ? <Check className='svgCheck'/> : <X className='svgX'/>
                }
            <h3>1 Numero</h3>
            </div>
            <div>
                {
                    props.caracterEspecial ? <Check className='svgCheck'/> : <X className='svgX'/>  
                }
            <h3>1 Caracter Especial</h3>
            </div>
            <div>
                {
                    props.minimoCaracter ? <Check className='svgCheck'/> : <X className='svgX'/>    
                    }
            <h3>No minímo 6 caracter</h3>
            </div>
        </Styles.ContentCardErro>
    )
}