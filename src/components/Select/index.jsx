import "./style.css";

export default function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Selecciona una opción",
  error,
}) {
  return (
    <div className="select">
      {label && <label className="select__label">{label}</label>}

      <select
        className={`select__field ${error ? "select__field--error" : ""}`}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="select__error">{error}</span>}
    </div>
  );
}
