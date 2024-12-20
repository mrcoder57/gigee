"use client";
import React, { useEffect, useState } from "react";
import Intro from "@/components/CreateGig/intro";

import Anytime from "@/components/CreateGig/landingPage/anytime/anytime";
import AuthForm from "@/components/authform/authForm";
import { SessionProvider, useSession } from "next-auth/react";
import MultiStepForm from "@/components/CreateGig/multisteps-forms/gigForms";

// The component wrapped inside SessionProvider to access session state
const Creategig = () => {
  return (
    <SessionProvider>
      <GigPage />
    </SessionProvider>
  );
};

const GigPage = () => {
  const { data: session, status } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [status]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-col h-full">
        <Intro />
        <Anytime />
        <div className="flex flex-row items-center justify-center mt-10 mb-9">
          {loggedIn ? (
            <MultiStepForm />
          ) : (
            <AuthForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Creategig;
