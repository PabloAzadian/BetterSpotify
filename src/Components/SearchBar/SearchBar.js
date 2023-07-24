import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("")
  

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e) => {
    setSearchOption(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    props.onSearch(searchTerm, searchOption);
  };
  return (
    <section className='search-bar'>
      {/* <div className='options'>
        <button
          onClick={handleClick}
          value='song'
          className={searchOption === 'song' ? 'active' : ''}
        >
          Song
        </button>
        <button
          onClick={handleClick}
          value='artist'
          className={searchOption === 'artist' ? 'active' : ''}
        >
          Artist
        </button>
        <button
          onClick={handleClick}
          value='playlist'
          className={searchOption === 'playlist' ? 'active' : ''}
        >
          Playlist
        </button>
      </div> */}
      <form onSubmit={search} className='input'>
            <input onChange={handleChange} type='text' placeholder='Search your song, artist, playlist, etc' />
            <button type="submit" className='search-button'>Search</button>
      </form>
    </section>
  );
}

export default SearchBar;
