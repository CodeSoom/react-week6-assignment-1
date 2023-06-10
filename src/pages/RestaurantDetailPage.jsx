import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurantDetail } from '../redux/actions';
import { get } from '../utils/utils';
import RestaurantDetailContainer from '../components/RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  return <RestaurantDetailContainer />;
}
