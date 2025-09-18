interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-5 sm:mx-20 lg:mx-40 ${className}`}>{children}</div>
  );
}
