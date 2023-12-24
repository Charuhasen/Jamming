"use client";
import HomePage from "./Home/home_page";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const requestAccessToken = async () => {
            try {
                const authParameters = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
                };

                const response = await fetch(
                    "https://accounts.spotify.com/api/token",
                    authParameters
                );

                if (!response.ok) {
                    throw new Error("Failed to obtain access token");
                }

                const data = await response.json();
                setAccessToken(data.access_token);
            } catch (error) {
                console.error("Error:", error.message);
            }
        };

        requestAccessToken();
    }, []);

    return (
        <div>
            <HomePage accessToken={accessToken} />
        </div>
    );
}
