export default function MenuItems({ menuItems }) {
  if (!menuItems || menuItems.length === 0) {
    return (
      <p>메뉴가 없어요 ㅠㅠ</p>
    );
  }

  return (
    <ul>
      {menuItems.map((menu) => (
        <li>{menu.name}</li>
      ))}
    </ul>
  );
}
