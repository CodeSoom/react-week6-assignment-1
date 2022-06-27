export default function Header({ onClick }) {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <h1>
      <a href="/" onClick={handleClick}>헤더</a>
    </h1>
  );
}
