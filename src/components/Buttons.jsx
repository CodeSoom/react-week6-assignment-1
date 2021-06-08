export default function ButtonList({ items, onClick, selected }) {
  return (
    <ul>
      {items.map(({ id, name }) => {
        const suffix = (selected === name) ? '(V)' : '';

        return (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick({ id, name })}
            >
              {name + suffix}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
