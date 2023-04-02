import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import Head from "next/head";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Conrad Crawford</title>
            </Head>
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <NavBar />
                <motion.div
                    className="mt-32 w-full box-border px-24 text-white font-playfair overflow-y-scroll h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.25, ease: "easeOut" }}
                >
                    <Component {...pageProps} />
                    <footer className="my-16 text-gray-600 w-full text-center text-sm">
                        All works © Conrad Crawford / 2023 / Please do not reproduce without the expressed written
                        consent of Conrad Crawford.
                    </footer>
                </motion.div>
            </div>
        </>
    );
}

export default MyApp;
