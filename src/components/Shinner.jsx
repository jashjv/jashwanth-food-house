import React from 'react';

const LoadingShimmer = () => {
  return (
    <div className='res-container'>
      {
        Array(15).fill("").map((index) => (
          <div className='shimmer' key={index}>

          </div>))
      }
    </div>
  )
}

export default LoadingShimmer;