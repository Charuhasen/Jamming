"use client";
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleClick = () => {
        if (searchQuery !== "") {
            onSearch(searchQuery);
            setSearchQuery("");
        }
    };

    return (
        <div className="flex justify-center mt-5">
            <input
                type="text"
                placeholder="Search for a track..."
                className="input input-bordered w-full max-w-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleClick} className="btn btn-primary ml-10">
                Search
            </button>
        </div>
    );
}
