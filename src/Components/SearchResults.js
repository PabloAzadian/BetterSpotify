import React from 'react'
import "./SearchResults.css"


const songResults = [
    {name: "LALA",
    artist: "Myke Towers",
    picSrc: "https://images.genius.com/6bc04ed7063cb53620a8d9f023697e1a.1000x1000x1.png",
    album: "LA VIDA ES UNA",
    duration: "3:18",},
    {name: "CORAZÓN VACÍO",
    artist: "Maria Becerra",
    picSrc: "https://i.scdn.co/image/ab67616d0000b273a3cbe5aa0bcf10eb02a8c960",
    album: "CORAZÓN VACÍO",
    duration: "2:41",},
    {name: "Dale Mecha",
    artist: "Mesita",
    picSrc: "https://i1.sndcdn.com/artworks-uBFPkDH6t9dBxWFJ-10uaFA-t500x500.jpg",
    album: "Dale Mecha",
    duration: "2:31",},
]



function SearchResults({searchOption, searchTerm})  {
  return (
    <div className='results'>
        <div className='ref-bar'>
            <h4 className='title'>Title</h4>
            <h4 className='album'>Album</h4>
            <h4 className='duration'>Duration</h4>
        </div>
        {songResults.map((song, i) => (
        <div className='songs' key={i}>
            <img src={song.picSrc} alt={song.name} />
            <div className='names'>
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
            <h3 className='album'>{song.album}</h3>
            <h3 className='duration'> {song.duration}</h3>
        </div>),)}
            
    </div>
  );
}

export default SearchResults;