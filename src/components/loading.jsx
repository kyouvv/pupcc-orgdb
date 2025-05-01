// LoadingScreen.jsx
import React from "react";
import loading from "../assets/puplaris-loading.gif";
import { motion } from "framer-motion";

const loadingVariants = {
    hidden: { opacity: 0, translateY: "100%" },
    visible: { opacity: 1, translateY: 0 },
    exit: { opacity: 0, translateY: "-100%" }
};

function LoadingScreen() {
    return (
        <motion.div
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[url(https://cdn.discordapp.com/attachments/813768653761806366/1218410348223139921/Untitled_design_13.png?ex=661a050f&is=6607900f&hm=1b66b69cd7fcea0d1af9d28b3a3df620680060be8a06a69811fc9849d1aa0b42&)] bg-cover bg-center w-screen h-screen flex justify-center items-center overflow-hidden relative"> {/* Set relative positioning */}
            <div className="absolute flex flex-col justify-center items-center"> {/* Set absolute positioning */}
                <img className="w-2/5" src={loading} alt="Loading.." />
                <p className="text-white text-lg mt-4 font-VT323">Fetching information...</p>
            </div>
        </motion.div>
    );
}

export default LoadingScreen;
