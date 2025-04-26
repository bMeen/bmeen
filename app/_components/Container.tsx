function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>;
}

export default Container;
