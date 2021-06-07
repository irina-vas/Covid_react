import React from 'react';
import classes from './CountriesList.module.css';

function CountriesList({countries, search, setSelectedCountry, setCountries}) {  
  countries = countries.filter((country) => country.Country.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={classes.wrapper}>
      <div className={classes.tableHead}>
        <div className={classes.tableHead_number}>№</div>
        <div 
          className={classes.tableHead_country} 
          onClick={() =>{ 
            const sortedByCountriesName = countries.sort((firstCountry,secCountry) => {
              if (firstCountry.Country > secCountry.Country) {
                return 1;
              } else {
                return -1;
              }
            })
            setCountries(sortedByCountriesName);
          }}
        >
          Countries
        </div>
          
        <div 
          className={classes.tableHead_totalConfirmed} 
          onClick={() => {
            const sortedTotalConfirmed = countries.sort((firstCountry, secCountry) => {
              if (firstCountry.TotalConfirmed > secCountry.TotalConfirmed) {
                return 1;
              } else {
                return -1;
              }
            })
            setCountries(sortedTotalConfirmed);
            console.log(sortedTotalConfirmed)
          }}
        >
          Total Confirmed
        </div>
      </div>
      {countries.map((item, index) => {
          return (
            <div key={index} className={classes.countryItem} onClick={() => setSelectedCountry(item)}>
              <div className={classes.number}>{index + 1}</div>
              <div className={classes.country}>{item.Country}</div>
              <div className={classes.totalConfirmed}>{item.TotalConfirmed}</div>
            </div>
          )
        })}

    </div>
  );
}

export default CountriesList;