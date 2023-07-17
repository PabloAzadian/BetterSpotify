import React, { useState, useEffect } from "react";
import "./App.css";
import Header from '../Header/Header';
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";
import Login from "../Login/Login"

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  


  
  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location = 'http://localhost:3000';
  };

  

  const search = (term, option) => {
    Spotify.search(term, option).then(setSearchResults); // we use our imported Spotify Component and make our own search function
  }

  const addTrack = (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) // We check if the song to add is already on the playlist
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]); // we add the song to the previous array of songs
    };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((prevTrack) => prevTrack.id !== track.id)   // Filter using track's id to remove the selected song
    );
  }

  const updatePlaylistName =(name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);     // we define a trackUris constant and save it to all Uri's on the new playlist by mapping the playlist
    Spotify.savePlaylist(playlistName, trackUris).then(() => {      // we call the Api to make the playlist, if it works then we reset the playlist component 
      setPlaylistTracks([]);
    });   
  }

  return (
    <div>
      
      
        {isLoggedIn ?
        <div className="App">
          <Header/>
          <button onClick={handleLogout}>Log out</button>
          <SearchBar onSearch={search} />
          <div className="App-playlist">
              <SearchResults searchResults={searchResults} onAdd={addTrack} />
              {newPlaylist? (<Playlist
              setNewPlaylist={setNewPlaylist}
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onRemove={removeTrack}
              onSave={savePlaylist}/>)
              :
              <button onClick={() => setNewPlaylist(true)}>Add new Playlist +</button>}
          </div>
          
        </div>
        :
        <Login  loginStateSetter={setIsLoggedIn}/>
      }
    </div>
  );
};

export default App;
