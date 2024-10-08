import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: any;
}

const Button = ({ children, className, href, onClick }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "text-lg font-semibold px-4 py-2 bg-themeColor/90 text-themeWhite hover:bg-themeColor duration-200",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={twMerge(
            "text-lg font-semibold px-4 py-2 bg-themeColor/90 text-themeWhite hover:bg-themeColor duration-200",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
