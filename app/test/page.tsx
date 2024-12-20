"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const Testpage = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        // Fetch the session
        const session = await getSession();
        if (session && session.token) {
          setToken(session.token); // Set the token from session
        } else {
          setToken("No token found");
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setToken("Error retrieving token");
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <h1 className="text-xl font-bold">Session Token:</h1>
        <p className="text-gray-600 max-w-sm">{token || "No token found"}</p>
      </div>
    </div>
  );
};

export default Testpage;
