import { useId } from "react";
const Textarea = ({ label, value, onChange, ...props }) => {
  const id = useId();
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className="form-control"
        value={value}
        onChange={onChange}
        {...props}
      ></textarea>
    </div>
  );
};
export default Textarea;
