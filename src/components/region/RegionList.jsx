import React from 'react';

import Item from '../common/Item';

const RegionList = ({ regions, onRegionClick, selectedRegion }) => {
  if (regions.length === 0) {
    return null;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          check={selectedRegion && id === selectedRegion.id}
          onClick={() => onRegionClick(id)}
        />
      ))}
    </ul>
  );
};

export default RegionList;
