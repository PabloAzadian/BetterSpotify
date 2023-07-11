import React, {useState} from 'react'
import './SearchBar.css'
import lupa from "../SearchBarLogo.png"

function SearchBar({optionSetter, termSetter}) {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchOption, setSearchOption] = useState("")
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handeClick = (e) => { 
        setSearchOption(e.target.value)
        
    }

    const handleSubmit = (e) => {
            optionSetter(searchOption);
            termSetter(searchTerm);
            
        }

    


  return (
    <section className='search-bar'>
        <div className='options'>
            <button onClick={handeClick} value="song">Song</button>
            <button onClick={handeClick} value="artist">Artist</button>
            <button onClick={handeClick} value="playlist">Playlist</button>
            
        </div>
        <div className='input'>
            <input onChange={handleChange} type='text' placeholder='Search your song, artist, playlist, etc' />
            <button onClick={handleSubmit} className='search-button'>Search</button>
        </div>
    </section>
  )
}

export default SearchBar