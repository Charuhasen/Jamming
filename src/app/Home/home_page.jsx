"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/search_bar";
import MusicCard from "../components/music_card";
import PlaylistItemCard from "../components/playlist_item_card";

export default function HomePage({ accessToken }) {
    const [searchReturn, setSearchReturn] = useState([]);
    const [playListName, setPlayListName] = useState("");
    const [newPlayList, setNewPlayList] = useState([]);

    const performSearch = async (searchTerm) => {
        const searchParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
        };

        try {
            const response = await fetch(
                "https://api.spotify.com/v1/search?q=" +
                    searchTerm +
                    "&type=track",
                searchParameters
            );

            if (!response.ok) {
                throw new Error("Failed to fetch data from Spotify API");
            }

            const data = await response.json();
            setSearchReturn(data.tracks.items);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const addToPlayList = (track) => {
        const found = newPlayList.some((el) => el.uri === track.uri);
        if (!found) {
            setNewPlayList((prevPlayList) => [...prevPlayList, track]);
        }
    };

    const deleteFromPlayList = (uri) => {
        const tempPlaylist = newPlayList.filter((el) => el.uri !== uri);
        setNewPlayList(tempPlaylist);
    };

    return (
        <>
            <Navbar />
            <SearchBar onSearch={performSearch} />
            <div className="flex flex-row h-screen mt-5">
                <div className="flex-1 flex flex-wrap">
                    {searchReturn.map((song) => (
                        console.log(song),
                        <MusicCard
                            key={song.id}
                            uri={song.uri}
                            image={song.album.images[0].url}
                            name={song.name}
                            onButtonPress={addToPlayList}
                            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
                        />
                    ))}
                </div>

                <div className="flex-1 mx-auto bg-red-400">
                    <div className="text-center">
                        <input
                            type="text"
                            placeholder="Playlist Name"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={playListName}
                            onChange={(e) => {
                                setPlayListName(e.target.value);
                            }}
                        />
                        <button
                            className="btn btn-accent ml-5"
                            onClick={() => {}}
                        >
                            Save
                        </button>
                    </div>
                    <div className="mt-5">
                        {newPlayList.map((album) => (
                            <div key={album.id} className="mb-2">
                                <PlaylistItemCard
                                    uri={album.uri}
                                    name={album.name}
                                    onButtonClick={deleteFromPlayList}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
