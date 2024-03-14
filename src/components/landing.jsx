// Landing.jsx
import React, { useState, useEffect } from "react";
import '../output.css';
import PUPCCLogo from '../assets/PUPCC-Logo.png';
import { FaFacebook, FaDiscord } from "react-icons/fa6";
import SearchBar from "./searchbar";

function Landing() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData().then(apiData => {
            setData(apiData);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            throw new Error('Error fetching data:', error);
        }
    };
    
    return (
        <div className="bg-[url('./assets/home-bg.png')] bg-cover bg-center h-screen w-screen flex justify-center items-center">
            <div className="card lg:card-side bg-base-200 text-center w-auto shadow-xl flex flex-col items-center">
                <img className="h-96 object-contain p-4" src={PUPCCLogo} alt="PUPCC-LOGO" />
                <div className="w-96 m-5 flex flex-col items-center">
                    <SearchBar data={data} />
                    <button className='btn bg-success'><i className="material-icons">visibility</i>View Database</button>
                    <div className="mt-2 p-2 border border-gray-300 rounded-md w-full text-justify bg-base-100">
                        <p>PUP Campus Connect Organizations Database contains information on active organizations within the PUP System. This database aims to help students find organizations that interest them and have information about the organizations as they need.</p>
                    </div>
                    <div className="mt-5 rounded-md w-full p-1 text-right">
                        <button className='mr-2 btn btn-circle bg-blue-300'><FaFacebook /></button>
                        <button className='btn btn-circle bg-blue-900'><FaDiscord color='white' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
