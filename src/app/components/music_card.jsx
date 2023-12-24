"use client";
import React from "react";

export default function MusicCard({ uri, image, name, onButtonPress }) {
    return (
        <div className="card w-72 bg-red-300 shadow-xl m-3">
            <figure>
                <img src={image} alt="Artist Image" />
            </figure>
            <div className="card-body">
                <h2 className="text-white">{name}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => {
                        onButtonPress({uri:uri,name:name});
                    }}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
