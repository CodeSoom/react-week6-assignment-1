export default function ButtonList({ names, onClick, selected }) {
  return (
    <ul>
      {names.map(({ id, name }) => (
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
