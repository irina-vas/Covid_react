import React from 'react';
import classes from './Country.module.css';
import confirmedIcon from '../common/images/heart.png';
import deathIcon from '../common/images/totalDeath.png';
import recoveredIcon from '../common/images/totalConfirmed.png';


function Country({selectedCountry, setSelectedCountry}) {
  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        <h1 className={classes.headline}>{selectedCountry.Country}</h1>
        <div className={classes.container}>
          <div className={classes.confirmed}>
            <div className={classes.content}>
              <div className={classes.icon}><img src={confirmedIcon} alt="icon"/></div>
              <p>Total Confirmed</p>
            </div>
            <p>{selectedCountry.TotalConfirmed}</p>
          </div>
          <div className={classes.death}>
            <div className={classes.content}>
              <div className={classes.icon}><img src={deathIcon} alt="icon"/></div>
              <p>Total Death</p>
            </div>
            <p>{selectedCountry.TotalDeaths}</p>
          </div>
          <div className={classes.recovered}>
            <div className={classes.content}>
              <div className={classes.icon}><img src={recoveredIcon} alt="icon"/></div>
              <p>Total Recovered</p>
            </div>
            <p>{selectedCountry.TotalRecovered}</p>
          </div>
        </div>
        <button className={classes.buttonOk} onClick={() => setSelectedCountry(null)}>OK</button>
      </div>
    </div>
  );
}

export default Country;