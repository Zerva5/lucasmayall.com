import Image from 'next/image'
 
interface CircleImageProps {
    src: string;
    alt: string;
    size: number;
}

export default function CirlcImage({src, alt, size}: CircleImageProps){
    return (
        <div className='circle-image-container'>
            <Image className='circle-image mat-styles' src={src} alt={alt} width={size} height={size} />
        </div>
    )
}