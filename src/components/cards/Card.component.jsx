import React from 'react'
import { Link } from "react-router-dom";

export default function Card({ country }) {

  const setCountry = (url) => {
    localStorage.setItem('countryUrl', url)
  };
  return (
    <Link to="/detail" onClick={() => setCountry(`https://restcountries.com/v3.1/name/${country.name.common}`)} className='list-item'>
      <div className="card-header">
        <div className="flag-wrapper">
          <img className='flag' src={country.flags.svg} alt={`${country.name.common} Flag`} />
        </div>
      </div>
      <div className="card-body">
        <h2 className='country-name'>
          {country.name.common}
        </h2>
      </div>
    </Link>
  )
}
