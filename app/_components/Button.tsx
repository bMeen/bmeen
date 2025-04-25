function Button({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-gray hover:bg-orange rounded cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
