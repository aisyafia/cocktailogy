"use client";

import Button from "./Button";
import { useState } from "react";
import { signIn } from "next-auth/react";

const UserAuthForm = () => {
  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.log("AN ERROR HAS OCCURRED:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        title="Sign in with Google"
        containerStyles="text-primary-blue rounded-full bg-white w-full hover:bg-sky-200"
        handleClick={loginWithGoogle}
      />
    </div>
  );
};

export default UserAuthForm;
