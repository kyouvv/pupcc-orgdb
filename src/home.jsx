// App.jsx
import React, { useState, useEffect } from 'react';
import './output.css';
import Landing from './components/landing.jsx';
import LoadingScreen from './components/loading.jsx';
import { AnimatePresence } from 'framer-motion';
import Org_Card from './components/org_card.jsx';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timeout; // Declare timeout variable
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
        <>
            <AnimatePresence mode='wait'>
                {loading ? <LoadingScreen key="loading" /> : <Landing data={data}/>}
            </AnimatePresence>
            
        </>
    );
}

export default App;
