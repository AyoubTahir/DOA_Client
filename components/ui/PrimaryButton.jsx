import Link from "next/link";

const PrimaryButton = ({ link, children }) => {
  return (
    <Link href={link}>
      <a className="bg-primary px-4 sm:px-7 py-3 text-white rounded hover:bg-white hover:text-primary border hover:border-primary uppercase">
        {children}
      </a>
    </Link>
  );
};

export default PrimaryButton;
