import React from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/images/back-arrow.svg'
import { useSelector } from 'react-redux/es/hooks/useSelector';


export default function BackButton() {
  const { title } = useSelector(state => state.countries);
  const selectedRegion = localStorage.getItem('selectedRegion');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <button onClick={goBack}>
      <img src={backArrow} alt={backArrow} />
      <h1 className='back-button-text'>{title} {selectedRegion ? `- ${selectedRegion}` : ''}</h1>
    </button>
  )
}
