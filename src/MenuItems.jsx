export default function MenuItems({ menuItems }) {
  if (!menuItems || !menuItems.length) {
    return <p>등록된 메뉴가 없습니다.</p>;
  }

  return (
    <ul>
      {menuItems.map((menu) => (
        <li key={menu.id}>
          {menu.name}
        </li>
      ))}
    </ul>
  );
}
