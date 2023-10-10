const Container = ({ className, children, ...props }) => {
  return (
    <div {...props} className={`max-w-md px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};
export default Container;
