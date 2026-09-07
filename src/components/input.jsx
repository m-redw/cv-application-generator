export function Input({ label, type = "text", inputName }) {
  return (
    <label>
      {label}
      <input type={type} name={inputName} />
    </label>
  );
}
