import { useId } from "react";

const Select = ({ label, value, onChange, children, ...props }) => {
  const id = useId();
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        {...props}
        className="form-control"
      >
        {children}
      </select>
    </div>
  );
};
export default Select;
