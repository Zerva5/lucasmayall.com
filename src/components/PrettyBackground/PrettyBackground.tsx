import { useEffect } from 'react';
import './PrettyBackground.css'

export default function PrettyBackground({children}: {children: React.ReactNode}){

    return(
        <div className='pretty-background'>
            <div className='background'></div>
            {children}

        </div>
    )
}