interface ContainerProps {
  children: React.ReactNode;
  className?: string
}

export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={`lg:mx-40 sm:mx-20 mx-5 ${className}`}>{children}</div>
}