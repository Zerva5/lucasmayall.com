import '../app/page.css'
import PrettyBackground from './PrettyBackground/PrettyBackground'

export default function Page({children}: {children: React.ReactNode}){
    return (
        <div className='page-container'>
            <div className='page'>

                <div className='content-container'>
                {children}
                </div>
            </div>
        </div>
    )
}