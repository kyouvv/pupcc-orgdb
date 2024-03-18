import React from "react";
import '../output.css';
import PUPCCLogo from '../assets/PUPCC-Logo.png';
import { FaFacebook, FaDiscord } from "react-icons/fa6";
import SearchBar from "./searchbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Landing = ({ data }) => {
    const landingVariants = {
        hidden: { opacity: 0, translateY: "100%" },
        visible: { opacity: 1, translateY: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={landingVariants}
            className={`bg-[url('https://cdn.discordapp.com/attachments/813768653761806366/1219138073481449513/Untitled_design_3.gif?ex=660a35cf&is=65f7c0cf&hm=57033b779109b0b36e8f3d0b7bd508ef3fdac3dc3fb852f29409eff50a5314b9&')] bg-cover bg-center h-screen w-screen flex justify-center items-center`}
        >
            <div className="rounded-md lg:card-side bg-neutral text-center w-auto shadow-xl shadow-white flex flex-col items-center">
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-96 object-contain p-4"
                    src={PUPCCLogo}
                    alt="PUPCC-LOGO"
                />
                <div className="w-96 m-5 flex flex-col items-center">
                    <SearchBar data={data} />
                    <Link to={'/database'} className='btn bg-success'><i className="material-icons">visibility</i>View Database</Link>
                    <div className="mt-2 p-2 border border-gray-300 rounded-md w-full text-justify bg-neutral-200 text-gray-500">
                        <p>PUP Campus Connect Organizations Database contains information on active organizations within the PUP System. This database aims to help students find organizations that interest them and have information about the organizations as they need.</p>
                    </div>
                    <div className="mt-5 rounded-md w-full p-1 text-right">
                        <a href="https://www.facebook.com/puplaris" target="_blank" rel="noopener noreferrer" className='mr-2 btn btn-circle bg-blue-300'><FaFacebook /></a>
                        <a href="https://discord.com/your-discord-server" target="_blank" rel="noopener noreferrer" className='btn btn-circle bg-blue-900'><FaDiscord color='white' /></a>
                        <p className="text-wrap">created by: kyouvv & Vinbits</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Landing;
