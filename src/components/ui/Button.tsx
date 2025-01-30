
const Button = ({
  variant,
  classNames,
  children,
}: Readonly<{
  variant?: 'outline';
  classNames?: string;
  children: React.ReactNode;
}>) => {    
  return (
    <button
      className={`${variant === 'outline' ? 'border-2' : ''}  font-bold py-3 px-6 rounded-full text-lg ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;