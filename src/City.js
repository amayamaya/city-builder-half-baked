import React from 'react';

export default function City({ castleId, skylineId, waterfrontId }) {
  return (
    <div className="city">
      <img src={`/${castleId}.jpeg`} />
      <img src={`/${skylineId}.jpeg`} />
      <img src={`/${waterfrontId}.jpeg`} />
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load appropriate images that live in the public directory */}
    </div>
  );
}
