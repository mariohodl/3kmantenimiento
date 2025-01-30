'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const AppLink = ({
  href,
  classNames,
  children,
}: Readonly<{
  href: string;
  classNames?: string;
  children: React.ReactNode;
}>) => {
    const pathname = usePathname()
  return (
    <Link href={href} className={`text-primary hover:text-red-700 hover:underline mr-7  text-xl font-medium ${classNames} ${pathname == href ? 'text-secondary' : 'text-primary'}`}>
        {children}
    </Link>
  );
};

export default AppLink;