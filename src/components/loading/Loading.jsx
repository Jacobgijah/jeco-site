import React from 'react'
import './loading.css'

const loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default loading