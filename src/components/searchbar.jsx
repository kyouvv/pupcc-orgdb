import React, { useState } from "react";

export default function SearchBar({ data }) {
    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const onChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setValue(event.target.value);
        setShowSuggestions(searchTerm !== '');
    }

    // Filter the data based on the search term
    const filteredData = data ? data.filter(item => {
        const term = value.toLowerCase();
        const name = item.name.toLowerCase();
        return term && name.startsWith(term);
    }) : [];

    return (
        <div className="relative">
            <div className="flex flex-row items-center mb-2 justify-center">
                <input className="input mr-2" type="text" placeholder="Search Organization" value={value} onChange={onChange} />
                <button className='btn btn-accent'><i className="material-icons">search</i></button>
            </div>
            <div className="bg-base-100 rounded-md absolute top-full left-0 w-full z-10 transition-opacity max-h-72 overflow-auto">
                {filteredData.map(item => (
                    <div key={item.name} className="">
                        <button className="btn w-full bg-base-100">{item.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
