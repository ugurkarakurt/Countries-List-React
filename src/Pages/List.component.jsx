import React from 'react';
import Cards from "../components/cards/Cards.component";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../redux/features/countries/countrySlice';
import { loading, title } from '../redux/features/countries/countrySlice';
import Loading from '../components/loading/LoadingSpinner.component';
import Header from '../components/header/Header.component';

export default function List() {
  const dispatch = useDispatch();
  const countriesUrl = localStorage.getItem('countriesUrl')

  useEffect(() => {
    dispatch(getCountries(countriesUrl ? countriesUrl : 'https://restcountries.com/v3.1/all'))
      .then(() => {
        dispatch(loading(false));
        dispatch(title('Country List'))
      })
  }, []);

  return (
    <div className="list-page">
      <Loading />
      <Header />
      <Cards />
    </div>
  )
}
