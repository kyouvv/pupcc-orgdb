import React from "react";
import { useNavigate } from "react-router";
import PUPCCLogo from '../assets/campus-logo.png';
import SearchBar from "./searchbar";
import Grid2 from "./hero";

export default function NavBar({data}){

    const navigate = useNavigate();

    const handleSuggestionClick = (searchTerm) => {
        // Navigate to the database route with search term as a query parameter
        navigate(`/database?search=${encodeURIComponent(searchTerm)}`);
    };

    return(

        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="md:mx-auto w-full navbar bg-base-100 border-b">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex flex-1 px-2 mx-2 md:justify-between">
                <span className="flex items-center">
                    <img className="h-16" src={PUPCCLogo} alt="" />
                    <span>Campus Connect</span>
                </span>
                <div className="">
                    <SearchBar data={data} onSuggestionClick={handleSuggestionClick}/>
                </div>
                </div>
            <div className="flex-none hidden lg:block mx-3">
                <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a className="bg-accent mr-2">Contact</a></li>
                <li><a className="bg-primary">About</a></li>
                </ul>
            </div>
            </div>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li><a>Contact</a></li>
            <li><a>About</a></li>
            </ul>
        </div>
</div>
    )
}