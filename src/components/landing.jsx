import React from "react";
import { FaFacebook, FaDiscord } from "react-icons/fa6";
import SearchBar from "./searchbar";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./navbar.jsx";
import HeroHeader from "./hero.jsx";

const Landing = ({ data }) => {
    return (
        <>
            <NavBar data={data} />
            <HeroHeader data={data} />
        </>
    );
}

export default Landing;
