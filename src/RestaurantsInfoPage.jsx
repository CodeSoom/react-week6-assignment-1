import { useParams } from 'react-router-dom';

export default function RestaurantsInfoPage() {
  const { id } = useParams();

  return (
    <>
      <h2>양천주가</h2>
      <h2>{id}</h2>
      <p>주소: </p>
      <h3>메뉴</h3>
      <ul>
        <li>메뉴 리스트가 들어올 자리</li>
      </ul>
    </>
  );
}
