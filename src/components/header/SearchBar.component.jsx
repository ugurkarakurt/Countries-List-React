import React from 'react'
import searchIcon from '../../assets/images/search-icon.svg';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/features/countries/countrySlice';
import { loading } from '../../redux/features/countries/countrySlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const selectCountry = document.querySelector('#selectCountry');

  const onSearchChange = (event) => {
    dispatch(loading(true));
    selectCountry.value = ''

    const searchFieldString = event.target.value.toLocaleLowerCase();
    dispatch(getCountries(!searchFieldString ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/name/${searchFieldString}`))
      .then(() => {
        dispatch(loading(false));
      });
  };

  return (
    <div className='search-bar-wrapper'>
      <input id="searchCountry" placeholder='Search Country' onChange={onSearchChange} type="text" className='search' />
      <img src={searchIcon} alt="" />
    </div>
  )
}
