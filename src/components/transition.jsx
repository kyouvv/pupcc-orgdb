// Transition.jsx
import React from "react";
import { motion } from "framer-motion";

const Transition = () => {
    return (
        <motion.div
            initial={{ translateY: "100%", opacity:0 }} // Initial position below the screen
            animate={{ translateY: 0, opacity:1 }} // Animation to slide up into view
            exit={{ translateY: "-100%", opacity:0 }} // Ensure smooth exit transition
            transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration
            className="bg-[url(https://cdn.discordapp.com/attachments/813768653761806366/1218492290843283456/Untitled_design_15.png?ex=6607dc60&is=65f56760&hm=dd3335bba92d55e5755a6667d55bd24bd71bdc55afe18df648817e86b81f8e6b&)] bg-cover bg-center h-screen w-screen"
        ></motion.div>
    );
}

export default Transition;
