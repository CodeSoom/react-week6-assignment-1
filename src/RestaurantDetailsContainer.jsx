import { useParams, useNavigate } from 'react-router-dom';

export default function RestaurantPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log('detail페이지 ', id);

  return (
    <div>
      <h2>식당이름</h2>
      <h3>식당메뉴</h3>
      <ul>
        <li>11</li>
      </ul>

      <button type="button" onClick={() => { navigate('/restaurant'); }}>목록으로</button>
    </div>
  );
}
