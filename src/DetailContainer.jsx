import React from 'react';

import { useSelector } from 'react-redux';

import DetailPage from './DetailPage';

import { get } from './utils';

export default function DetailContainer() {
  const detail = useSelector(get('detail'))
  
  return <DetailPage detail={detail} />;
}
