"use client"
import React, { useEffect, useState } from "react";
import Intro from "@/components/CreateGig/intro";
import MultiStepForm from "@/components/CreateGig/multi-step-form/form";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Login } from "@/components/modal/login";

const Creategig = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <Intro />
        <div className="flex flex-row items-center justify-center mt-10 mb-9">
          {loggedIn ? (
            <MultiStepForm />
          ) : (
           <Login/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Creategig;
