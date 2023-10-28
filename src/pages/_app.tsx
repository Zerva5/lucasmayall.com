import Head from "next/head";
import Link from "next/link";

 
export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
    {/* </Head> */} 
      <Component {...pageProps} />
      </>
  );
}