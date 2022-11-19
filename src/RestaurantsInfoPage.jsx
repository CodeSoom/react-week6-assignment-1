import { useParams } from 'react-router-dom';

import RestaurantsInfoContainer from './RestaurantsInfoContainer';

export default function RestaurantsInfoPage() {
  const { id } = useParams();

  return (
    <RestaurantsInfoContainer id={id} />
  );
}
