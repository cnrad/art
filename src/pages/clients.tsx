import type { NextPage } from "next";
import Image from "next/image";
import neoHop from "../../public/clients/hop/neo_hop.png";
import macbookWallpaper from "../../public/clients/hop/macbook_wallpaper.jpeg";
import hopBanner from "../../public/clients/hop/hop_banner.png";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <div>nuthin</div>
        // <div className="w-full h-auto">
        //     <h1 className="text-5xl mb-4 font-medium">Client work.</h1>
        //     <p className="text-gray-400 mb-12 w-1/2">
        //         Occasionally, I&apos;ll{" "}
        //         <span
        //             onClick={() => router.push("/contact")}
        //             className="text-neutral-300 hover:text-white cursor-pointer transition-all"
        //         >
        //             work with clients
        //         </span>{" "}
        //         to create immersive and engaging digital art that strengthens their brand&apos;s impact or promotes a
        //         certain product/service of theirs. Below are examples of previous work I&apos;ve done for others.
        //     </p>
        //     <div className="flex flex-row flex-wrap mb-24">
        //         <motion.div
        //             className="w-32 h-32 relative cursor-pointer"
        //             style={{ backgroundImage: `url('/clients/hop/neo_hop_icon.png')`, backgroundSize: "cover" }}
        //             whileHover={{ scale: 1.05 }}
        //             transition={{ duration: 0.5, ease: "easeOut" }}
        //         >
        //             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black opacity-50 hover:opacity-25 transition-opacity" />
        //             <HopIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 pointer-events-none" />
        //         </motion.div>
        //     </div>
        //     <HopInc />
        // </div>
    );
};

const HopIcon = (props: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" {...props}>
            <g id="a1c6c63a-e459-44a3-b4b7-af910ae95872">
                <g id="fa506414-24b2-4115-bfea-5ced8b49bd02">
                    <path
                        d="M30,20a30.09,30.09,0,0,0-10,1.71V0H0V80H20V50a10,10,0,0,1,20,0V80H60V50A30,30,0,0,0,30,20Z"
                        fill="#fff"
                    />
                    <path
                        d="M80,20a30,30,0,1,0,30,30A30,30,0,0,0,80,20Zm0,40A10,10,0,1,1,90,50,10,10,0,0,1,80,60Z"
                        fill="#fff"
                    />
                    <path
                        d="M130,20a30,30,0,0,0-30,30v50h20V78.29A30,30,0,1,0,130,20Zm0,40a10,10,0,1,1,10-10A10,10,0,0,1,130,60Z"
                        fill="#fff"
                    />
                </g>
            </g>
        </svg>
    );
};

const HopInc = () => (
    <div className="flex flex-col w-full ">
        <h1 className="uppercase text-5xl">Hop Inc.</h1>
        <p className="text-lg text-gray-400 mb-12">Branding Assets</p>
        <div className="-ml-24 w-screen">
            <Image
                src={neoHop}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                alt="A 'neo' inspired wallpaper, created specifically for Hop."
            />
            <Image
                src={hopBanner}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                alt="A banner with the words 'write code, deploy, repeat' on it, with a MacBook showcasing the Hop console on the left."
            />
            <Image
                src={macbookWallpaper}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                alt="A 2021 M1 MacBook Pro with the Hop-based wallpaper, showcasing the Hop console on a Chrome window in the middle."
            />
        </div>
    </div>
);

export default Home;
