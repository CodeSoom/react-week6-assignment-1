export default function RestaurantAddress({ address }) {
  if (!address) {
    return (
      <p>
        주소를 준비중입니다.
      </p>
    );
  }

  return (
    <p>
      주소:
      {' '}
      {address}
    </p>
  );
}
