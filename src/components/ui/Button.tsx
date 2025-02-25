import { ArrowRight } from 'lucide-react'

const Button = ({
  variant,
  classNames,
  children,
  showArrowRight = false,
}: Readonly<{
  variant?: 'outline';
  classNames?: string;
  children: React.ReactNode;
  showArrowRight?: boolean;
}>) => {    
  return (
    <button
      className={`${variant === 'outline' ? 'border-2' : ''} flex items-center justify-between font-bold py-3 px-6 rounded-full text-lg ${classNames}`}
    >
      {children}
      {
        showArrowRight && <ArrowRight className="w-5 h-5 ml-3" />
      }
    </button>
  );
};

export default Button;