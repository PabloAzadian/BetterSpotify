import React, { useState } from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const [playlistName, setPlaylistName] = useState("")
  const [error,setError] = useState("")

  

  const handleNameChange =  (event) => {
        setPlaylistName(event.target.value);
        props.onNameChange(event.target.value);
      };

  const toggleOff = () =>{
    props.setNewPlaylist(false)
  }

  const handleSave = () => {
    if(playlistName=== "")
    {
      setError("You need to assign a name to your playlist.")
    }else if (props.playlistTracks.length === 0){
      setError("you need to add at least one song to your playlist")
    }
    if(playlistName!== "" && props.playlistTracks.length !== 0)
    {
      setError("")
      props.onSave();
      setPlaylistName("")
    }
  }

  


  return (
    <div className="Playlist">
      <div className="playlist-header">
        <input onChange={handleNameChange} value={playlistName} className="playlist-name-changer" placeholder="New Playlist" />
        <button className="button-togle-off" onClick={toggleOff}>X</button>
      </div>
      {error&& <div className="error" >{error}</div> }
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={handleSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
