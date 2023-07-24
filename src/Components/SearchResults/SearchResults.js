import React from 'react'
import "./SearchResults.css"
import TrackList from "../TrackList/TrackList";


// const songResults = [
//     {name: "LALA",
//     artist: "Myke Towers",
//     picSrc: "https://images.genius.com/6bc04ed7063cb53620a8d9f023697e1a.1000x1000x1.png",
//     album: "LA VIDA ES UNA",
//     duration: "3:18",},
//     {name: "CORAZÓN VACÍO",
//     artist: "Maria Becerra",
//     picSrc: "https://i.scdn.co/image/ab67616d0000b273a3cbe5aa0bcf10eb02a8c960",
//     album: "CORAZÓN VACÍO",
//     duration: "2:41",},
//     {name: "Dale Mecha",
//     artist: "Mesita",
//     picSrc: "https://i1.sndcdn.com/artworks-uBFPkDH6t9dBxWFJ-10uaFA-t500x500.jpg",
//     album: "Dale Mecha",
//     duration: "2:31",},
// ]




function SearchResults(props)  {
  return (
    <div className='results'>
      <div className='ref-bar'>
              <h4>Image</h4>
              <h4>Title</h4>
              <h4>Album</h4>
              <h4>Duration</h4>
              <h4>Action</h4>
      </div>
      <div className='song-container'>
        <div className="SearchResults">
                <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
      </div>
              
      
    </div>
  );
}

export default SearchResults;