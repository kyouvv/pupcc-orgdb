import React from "react";
import { useState } from "react";
import { FaFacebook, FaDiscord } from "react-icons/fa6";

export default function SearchBar({ data, onSuggestionClick }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const onChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setValue(event.target.value);
        setShowSuggestions(searchTerm !== '');

        // Filter the data based on the search term
        const filteredData = data.filter(item => {
            const name = item.name.toLowerCase();
            return name.includes(searchTerm);
        });
        setFilteredData(filteredData);
    }

    const handleSuggestionClick = (searchTerm) => {
        setValue(searchTerm);
        setShowSuggestions(false);
        onSuggestionClick(searchTerm);
    };

    return (
        <div className="relative flex flex-row items-center m-2 justify-center rounded-md">
            <input
                className="input mr-2"
                type="text"
                placeholder="Search Organization"
                value={value}
                onChange={onChange}
            />

            {showSuggestions && filteredData.length > 0 && (
                <div className="absolute z-10 w-full h-60 top-full bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto">
                    {filteredData.map(item => (
                        <button
                            key={item.name}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                            onClick={() => handleSuggestionClick(item.name)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
