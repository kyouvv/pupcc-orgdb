import React, { useState } from "react";
import { FaFacebook, FaDiscord } from "react-icons/fa6";

export default function SearchBar({ data, onSuggestionClick }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Extract unique categories from the data
    const categories = Array.from(new Set(data.map(item => item.category)));

    const onChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setValue(event.target.value);
        setShowSuggestions(searchTerm !== '');

        // Filter the data based on the search term and selected categories
        const filteredData = data.filter(item => {
            const name = item.name.toLowerCase();
            const passesSearch = name.includes(searchTerm);
            const passesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
            return passesSearch && passesCategory;
        });
        setFilteredData(filteredData);
    }

    const handleSuggestionClick = (searchTerm) => {
        setValue(searchTerm);
        setShowSuggestions(false);
        onSuggestionClick(searchTerm);
    };

    const handleBlur = () => {
        setShowSuggestions(false)
    }

    const handleFocus = () => {
        if (!showSuggestions) {
            setShowSuggestions(true)
        }
    }

    const toggleCategory = (category) => {
        const isSelected = selectedCategories.includes(category);
        if (isSelected) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    return (
        <div className="relative flex flex-col items-center m-2 justify-center rounded-md">
            <div className="flex flex-row items-center mb-2">
                <input
                    className="input mr-2"
                    type="text"
                    placeholder="Search Organization"
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />

                {/* Render category filter dropdown */}
                <div className="relative">
                    <button
                        className="btn btn-xs btn-primary"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Categories
                    </button>
                    {dropdownOpen && (
                        <div className="absolute dropdown max-h-44 overflow-y-auto top-full left-0 mt-2">
                            <ul className="menu p-2 shadow-lg bg-base-100 rounded-md">
                                {categories.map(category => (
                                    <li key={category}>
                                        <a
                                            className={`cursor-pointer ${selectedCategories.includes(category) ? 'bg-neutral-200' : ''}`}
                                            onClick={() => toggleCategory(category)}
                                        >
                                            {category}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Suggestions dropdown */}
            {showSuggestions && filteredData.length > 0 && value !== '' && (
                <div className="absolute z-10 w-full max-h-60 top-full bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto">
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
