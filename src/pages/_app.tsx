import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>art by conrad.</title>
            </Head>
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <NavBar />
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
