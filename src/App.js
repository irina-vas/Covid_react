import './App.css';
import React, {useEffect, useState} from 'react';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import * as axios from 'axios';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
 
  useEffect(() => {
    const url = 'https://api.covid19api.com/summary';
    axios.get(url)
      .then(response => response)
      .then(data => {
        setCountries(data.data.Countries); 
      }).catch(error => console.error(error))
  },[])
  
  return (
    <div>
      <Header setSearch={setSearch} />
      <CountriesList 
        countries={countries} 
        setCountries={setCountries} 
        search={search} 
        setSelectedCountry={setSelectedCountry} 
      />
      { selectedCountry && <Country selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} /> }
    </div>
  );
}

export default App;
