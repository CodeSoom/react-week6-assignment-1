import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { get } from '../utils';

export default function RestaurantInfoPage() {
  const dispatch = useDispatch();

  const { restaurantInfo } = useSelector(get('restaurantInfo'));

  const { params } = useParams();

  useEffect(() => {
    // TODO: Add dispatch later
    // dispatch()
  });

  const { name, address, menuItems } = restaurantInfo;
  return (
    <>
      <p>
        my parameter is
        { params }
        ok? ok.
        and my
        { name }
        { address }
        { menuItems }
        Thank you.
      </p>
    </>
  );
}
