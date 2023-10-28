import DefaultPage from "@/components/DefaultPage";
import Image from "next/image";
import Link from "next/link";
//import { Document } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export default function Resume() {
  return (
    <DefaultPage title="Resume" textMargin={false}>
      <div className="bg-white flex-grow flex">
         <embed
           className="object-contain flex-grow"
           width="100%"
           src="/resume.pdf"
           type="application/pdf"
         />
         </div>
    </DefaultPage>
  );
}
