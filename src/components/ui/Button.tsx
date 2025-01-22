
const Button = ({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) => {    
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;