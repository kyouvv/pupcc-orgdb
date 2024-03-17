import { useState, useEffect } from "react";
import Database from "./components/database";
import LoadingScreen from "./components/loading";
import { AnimatePresence } from "framer-motion";
import SearchBar from "./components/searchbar";

const DatabaseRoute = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
            .then(apiData => {
                setData(apiData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://pupcc-web.onrender.com/api/getorgs');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            throw new Error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <AnimatePresence>
                {loading ? <LoadingScreen key="loading" /> : <Database data={data} />}
            </AnimatePresence>
        </div>
    );
};

export default DatabaseRoute;
