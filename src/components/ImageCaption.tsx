import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import 'tailwindcss/tailwind.css';

type ImageWithCaptionProps = {
  imgSrc: string | StaticImageData;
  altText: string;
  caption: string;
};

export default function ImageWithCaption({imgSrc, altText, caption}:ImageWithCaptionProps) {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={imgSrc}
        alt={altText}
        className="rounded-md"
        // width={500} // Set your desired width
        // height={300} // Set your desired height
      />
      <h5 className="text-center">{caption}</h5>
    </div>
  );
};

