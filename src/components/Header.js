import React from 'react';
import classes from './Header.module.css';
import covidImage from '../common/images/covidIcon.png';
import loupe from '../common/images/loupe.png';


function Header({setSearch}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <div className={classes.covidImage}>
          <img src={covidImage} alt="covid_icon" />
        </div>
        <h1>STATISTIC</h1>
      </div>
      <div className={classes.searchForm}>
        <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
        <div className={classes.loupe}>
          <img src={loupe} alt="search" />
        </div>
      </div>
    </div>
  );
}

export default Header;