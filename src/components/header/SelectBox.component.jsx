import React from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/features/countries/countrySlice';
import { loading } from '../../redux/features/countries/countrySlice';

export default function SelectBox() {
  const dispatch = useDispatch();
  const selectedRegion = localStorage.getItem('selectedRegion');

  const onSelectChange = (event) => {
    let searchCountry = document.querySelector('#searchCountry');
    searchCountry.value = ''
    dispatch(loading(true));
    const selectFieldString = event.target.value.toLocaleLowerCase();
    dispatch(getCountries(!selectFieldString ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${selectFieldString}`))
      .then(() => {
        dispatch(loading(false));
      }).catch(err => {
        console.log(err);
      });

    localStorage.setItem('countriesUrl', !selectFieldString ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${selectFieldString}`);
    localStorage.setItem('selectedRegion', !selectFieldString ? '' : selectFieldString)
  };
  return (
    <div onChange={onSelectChange} className='select-box-wrapper'>
      <select name="select-country" defaultValue={selectedRegion ? selectedRegion : ''} id="selectCountry">
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}
