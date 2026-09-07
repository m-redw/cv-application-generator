export function Button({ text, callback, bType }) {
  return (
    <button onClick={callback} type={bType}>
      {text}
    </button>
  );
}
