export default function MenuItems({ menuItems }) {
  const isEmpty = (arr = []) => arr.length === 0;
  if (!menuItems || isEmpty(menuItems)) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }
  return (
    <ul>
      {menuItems.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
