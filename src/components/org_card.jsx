import React from "react";
import { motion } from "framer-motion";

const DaisyUICard = ({ image, title, description, social }) => {
    const handleDetailsClick = () => {
        // Implement logic to navigate to detailed view
    };

    return (
        <motion.div
            className="flex flex-col justify-between items-stretch"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="card shadow-lg rounded-lg overflow-hidden glass flex flex-col">
                <img className="object-cover object-center w-full h-52" src={image} alt={title} />
                <div className="card-body p-4 flex flex-col justify-between">
                    <div>
                        <h2 className="card-title text-gray-200 font-bold text-xl mb-2">{title}</h2>
                        <p className="card-text text-gray-300 text-base">{description}</p>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-sm btn-secondary" onClick={handleDetailsClick}>Details</button>
                        <a href={social} className="btn btn-sm btn-info ml-2">Social</a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DaisyUICard;
