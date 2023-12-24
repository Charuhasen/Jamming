"use client";
import React from "react";

export default function PlaylistItemCard({ uri, name, onButtonClick }) {
    return (
        <>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <div className="flex justify-around">
                        <h2 className="card-title">{name}</h2>
                        <button
                            onClick={() => {
                                onButtonClick(uri);
                            }}
                            className="btn"
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
