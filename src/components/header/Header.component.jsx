import React from 'react'
import SearchBar from './SearchBar.component';
import SelectBox from './SelectBox.component';
import BackButton from './BackButton.component';
export default function Header() {

  return (
    <header className='header'>
      <div className="title-wrapper">
        <BackButton />
      </div>
      <div className="actions-wrapper">
        <SearchBar />
        <SelectBox />
      </div>
    </header>
  )
}