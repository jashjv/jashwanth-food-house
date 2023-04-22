import React from 'react';
import { Image, Breathing } from 'react-shimmer'

const LoadingShimmer = () => {
  return (
      <div>
          <h3>loading.......</h3>
    <Image
      src='https://source.unsplash.com/random/800x600'
      fallback={<Breathing width={800} height={600} />}
    />
  </div>
  )
}

export default LoadingShimmer;