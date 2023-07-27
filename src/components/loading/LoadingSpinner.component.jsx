import React from 'react';
import EarthIcon from '../../assets/images/earth-svgrepo-com.svg';
import { useSelector } from 'react-redux';

export default function Loading() {
  const { loading } = useSelector(state => state.countries);

  return (
    <div className={"loadingSpinner loading-spinner " + (loading ? 'show' : '')} >
      <div className="lds-circle">
        <div>
          <img src={EarthIcon} alt="" />
        </div>
      </div>
    </div>
  )
}
