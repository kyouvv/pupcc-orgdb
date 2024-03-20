import {React} from "react";
import Hero from "../assets/hero.png"
import SearchBar from "./searchbar";
import { Link, useNavigate } from "react-router-dom";

function HeroHeader(props) {

    const navigate = useNavigate();

    const handleSuggestionClick = (searchTerm) => {
        // Navigate to the database route with search term as a query parameter
        navigate(`/database?search=${encodeURIComponent(searchTerm)}`);
    };

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between">
                <img src={Hero} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl" />
                <div className="text-center lg:text-left">
                    <h1 className="text-8xl font-bold">Campus</h1>
                    <h1 className="text-8xl"><span className="text-base-200">__</span>Connect</h1>
                    <p className="py-6">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                        <Link to={'/database'} className="btn btn-primary mb-2 md:mb-4 lg:mb-0 lg:mr-4">Get Started</Link>
                        <div className="hidden md:block">
                        <SearchBar data={props.data} onSuggestionClick={handleSuggestionClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

// --------------------------------- ANOTHER LAYOUT ------------------------------------------------//
        // <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-0">
        //     <div className="rounded-lg w-96 md:w-4/5 grid md:grid-cols-2">
        //         <div className="w-full text-center items-center">
        //                 <h1 className="text-5xl md:text-8xl font-Lobster font-bold">
        //                     Campus 
        //                 </h1>
        //                 <h1 className="text-5xl md:text-8xl mb-5">
        //                     Connect
        //                 </h1>
        //                 <span className="divider"></span>
        //                 <p className="text-justify mx-14">
        //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        //                 </p>
        //                 <span className="divider"></span>
        //             <SearchBar data={props.data} />
        //             <Link to={'/database'} className="btn btn-success">View Database</Link>
        //         </div>
        //         <div className="flex">
        //             <img src={Hero} alt="" />
        //         </div>
        //     </div>
        // </div>
    )
}


export default HeroHeader