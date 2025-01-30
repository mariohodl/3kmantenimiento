import Link from 'next/link'

const AppLink = ({
  href,
  classNames,
  children,
}: Readonly<{
  href: string;
  classNames?: string;
  children: React.ReactNode;
}>) => {
  return (
    <Link href={href} className={`text-primary hover:text-red-700 hover:underline mr-7  text-xl font-medium ${classNames}`}>
        {children}
    </Link>
  );
};

export default AppLink;