import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('');

  

  return (
    <div className="App">
      <Header/>
      <SearchBar optionSetter={setSearchOption} termSetter={setSearchTerm}/>
      <SearchResults searchOption={searchOption} searchTerm={searchTerm}/>
      {/*<Playlist />
      <Tracklist />
      <Track/> */}
      
    </div>
  );
}

export default App;
