import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="masx-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/cocklogo.svg"
            alt="website logo"
            width={77}
            height={7}
            className="object-contain"
          />
        </Link>
        <Button
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export { Navbar };
