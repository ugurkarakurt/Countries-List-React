import React from 'react'
import Card from './Card.component'
import { useSelector } from 'react-redux';

export default function Cards() {
  const { countries } = useSelector(state => state.countries);

  return (
    <>
      {!countries.length ? (
        <>
          <img src="" alt="" />
        </>
      ) : (
        <div className='list-items'>
          {countries.map((country) => (
            <Card key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </>
  )
}
