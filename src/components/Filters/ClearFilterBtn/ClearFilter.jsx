import React from 'react';
import './ClearFilter.css';
import ClearFilterIcon from '../../../assets/icons/clear-filter_16-16.png';


const ClearFilter = ({resetAllFilters}) => {


  return (
    <div className="clear__filter__wrapper">
      <button 
        onClick={() => resetAllFilters()}
        className="clear__filter__all"
      >
        <span>All</span>
        <img src={ClearFilterIcon} alt='clear filter'/>
      </button>
    </div>
  );
}

export default ClearFilter;
