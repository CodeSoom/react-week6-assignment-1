export default function ButtonList({ items, onClick, selected }) {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({ id, name })}
          >
            {(selected === name) ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
