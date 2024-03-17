import React from "react";
import { motion } from "framer-motion";

const DaisyUICard = ({ image, title, description, date }) => {
    const handleDetailsClick = () => {
        // Implement logic to navigate to detailed view
    };


    return (
        <motion.div
            className="card bg-accent shadow-lg rounded-lg overflow-hidden glass"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <img className="w-full h-56 object-cover object-center" src={image} alt={title} />
            <div className="card-body">
                <h2 className="card-title text-gray-900 font-bold text-xl mb-2">{title}</h2>
                <p className="card-text text-gray-800 text-base">{description}</p>
                <div className="mt-4 flex justify-between">
                    <button className="btn btn-sm btn-secondary" onClick={handleDetailsClick}>Details</button>
                </div>
            </div>
        </motion.div>
    );
};

export default DaisyUICard;
