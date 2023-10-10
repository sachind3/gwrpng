const Button = ({ type = "text", className, children, ...props }) => {
  return (
    <button
      type={type}
      className={className ? `${className} btn` : "btn"}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
