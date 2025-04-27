import "./Checkbox.css";

function Checkbox({ label }) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  );
}

export default Checkbox;
