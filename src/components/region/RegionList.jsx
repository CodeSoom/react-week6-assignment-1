import React from 'react';

const RegionList = ({ regions, onSelectRegionClick, selectedRegion }) => {
  if (regions.length === 0) {
    return null;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onSelectRegionClick(id)}
          >
            {name}
            {selectedRegion ? (
              <>
                {id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RegionList;
