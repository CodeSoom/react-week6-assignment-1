import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRestaurantInfo, selectRestaurant } from "./actions";
import { isEmpty } from "./utils";

export default function RestaurantInfoPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectRestaurant(match.params.id));
    dispatch(loadRestaurantInfo());
  }, []);

  return (
    <h2>Detail</h2>
  );
}
