import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../../utils/utils';

export default function Restaurants({ restaurants, handleClick }) {
  const selectedRegion = useSelector(get('selectedRegion'));
  const selectedCategory = useSelector(get('selectedCategory'));

  if (selectedRegion && !selectedCategory) {
    return (
      <p>카테고리를 클릭해주세요.</p>
    );
  }

  if (selectedCategory && !selectedRegion) {
    return (
      <p>지역를 클릭해주세요.</p>
    );
  }

  if (selectedRegion && selectedCategory && !restaurants.length) {
    return (
      <p>해당 지역에 선택하신 분야 식당이 없습니다.</p>
    );
  }

  if (!restaurants.length) {
    return (
      <p>지역과 카테고리를 클릭해주세요.</p>
    );
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link
            to={`/restaurants/${id}`}
            onClick={() => handleClick(id)}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
