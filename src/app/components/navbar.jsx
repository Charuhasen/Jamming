'use client';
import React from "react";

export default function Navbar() {
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Jamming</a>
            </div>
            <div className="navbar-end">
                <a className="btn">Logout</a>
            </div>
        </div>
    );
}
