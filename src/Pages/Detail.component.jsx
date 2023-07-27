import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountry } from '../redux/features/countries/countrySlice';
import { title } from '../redux/features/countries/countrySlice';
import BackButton from '../components/header/BackButton.component';

export default function Detail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(countryUrl))
    dispatch(title('Country Detail'));
  }, []);

  const { country } = useSelector(state => state.countries);
  const countryUrl = localStorage.getItem('countryUrl');

  return (
    <>
      {!country.length ? (
        <>
          <img src="" alt="" />
        </>
      ) : (
        <div className='detail-page'>
          <div className="detail">
            <div className="detail-header">
              <BackButton />
              <div className="flag-wrapper">
                <img className='flag' src={country[0].flags.svg} alt={`${country[0].name.common} Flag`} />
              </div>
            </div>
            <div className="detail-body">
              <div className="informations">
                <ul>
                  <li><span>Name </span><span>{country[0].name.official}</span></li>
                  <li><span>Capital </span><span>{country[0].capital[0]}</span></li>
                  <li><span>Continents</span><span>{country[0].continents[0]}</span></li>
                  <li><span>Flag</span><span>{country[0].flag}</span></li>
                  <li><span>Region</span><span>{country[0].region}</span></li>
                  <li><span>Population</span><span>{country[0].population}</span></li>
                  <li>
                    <span>Languages</span>
                    {Object.values(country[0].languages).map((lang) => (
                      <span key={lang}>{lang}</span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
