import { useId } from "react";
const Input = ({ label, type = "text", value, onChange, ...props }) => {
  const id = useId();
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className="form-control"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
export default Input;
