export function Button({ text, callback, bType, className }) {
  return (
    <button onClick={callback} type={bType} className={className}>
      {text}
    </button>
  );
}
