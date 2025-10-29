/**
 * QuantitySelector Component
 */
const QuantitySelector = ({ value, onChange, min = 1, max = 99, minLabel }) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="quantity-selector">
      <label className="quantity-selector__label">Cantidad:</label>
      <div className="quantity-selector__controls">
        <button
          className="quantity-selector__button"
          onClick={handleDecrement}
          disabled={value <= min}
        >
          -
        </button>
        <input
          type="number"
          className="quantity-selector__input"
          value={value}
          onChange={(e) => {
            const val = parseInt(e.target.value) || min;
            if (val >= min && val <= max) onChange(val);
          }}
          min={min}
          max={max}
        />
        <button
          className="quantity-selector__button"
          onClick={handleIncrement}
          disabled={value >= max}
        >
          +
        </button>
      </div>
      {minLabel && (
        <span className="quantity-selector__hint">
          Cantidad mínima de compra: {min} {minLabel}
        </span>
      )}
    </div>
  );
};
