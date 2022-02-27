import React from 'react';

const Loader = () => {
  return (
    <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center' , margin : '1rem 0'}}>
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Loader;
