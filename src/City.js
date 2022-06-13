import React from 'react';

export default function City({ castleId }) {
  return (
    <div className="city">
      <img src={`/${castleId}.jpeg`} />
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}
