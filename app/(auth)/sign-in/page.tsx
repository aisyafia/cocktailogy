import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { UserAuthForm } from "@/components";

const SignIn = () => {
  return (
    <main className="overflow-hidden padding-y">
      <div className="mt-10 padding-x padding-y max-width">
        <h2 className="text-2xl font-semibold">
          Login into your existing account
        </h2>
        <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <Image
              src="/cocklogo.svg"
              alt="website logo"
              width={66}
              height={6}
              className="object-contain mx-auto h-6 w-6"
            />
            <p className="text-sm max-w-xs mx-auto">
              By continuing, you are setting up a Cocktailogy account and agree
              to our User Agreement and Privacy Policy.
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            New to Cocktailogy?{" "}
            <Link
              href="/sign-up"
              className="hover:text-brand text-sm underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
