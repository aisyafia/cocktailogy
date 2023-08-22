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
            height={8}
            className="object-contain"
            style={{ height: "auto" }}
          />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Cocktailogy
          </p>
        </Link>
        <Link href="/sign-in">
          <Button
            title="Sign In"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] hover:bg-sky-200"
          />
        </Link>
      </nav>
    </header>
  );
};

export { Navbar };
