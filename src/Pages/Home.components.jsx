import React from 'react'
import coverVideo from '../assets/videos/globe.mp4';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='globe'>
      <div className="title">
        <Link to="/list">Country List</Link>
      </div>
      <video loop autoPlay muted>
        <source src={coverVideo} type="video/mp4" />
      </video>
    </div>
  )
}
