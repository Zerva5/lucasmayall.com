import Head from "next/head";
import Link from "next/link";

 
export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
      <Link rel="preconnect" href="https://fonts.gstatic.com" ></Link>
      <Link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"></Link>
    </Head>
    {/* </Head> */} 
      <Component {...pageProps} />
      </>
  );
}