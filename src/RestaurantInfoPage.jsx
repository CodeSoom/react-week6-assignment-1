import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { loadRestaurantInfo, selectRestaurant } from "./actions";
import { get } from "./utils";

export default function RestaurantInfoPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectRestaurant(Number(match.params.id)));
    dispatch(loadRestaurantInfo());
  }, []);

  return (
    <>
      <h2>양천주가</h2>
      <h3>메뉴</h3>
      <ul>
        <li>비빔밥</li>
      </ul>
    </>
  );
}
