import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { getSession } from "next-auth/react";

export const userId = Cookies.get("userId");
const Token = Cookies.get("token");

const session =  getSession(); // This is an asynchronous call to get the session  
    // If session is valid, configure the headers for your API request
   export const config = {
      headers: {
        Authorization: `Bearer ${Token}`,  // Make sure you're passing the correct token if available
      },
    };

    // Example API call with the session token in the Authorization header
    // For demonstration, assuming you're making a PUT request to update the profile


export const Loginuser = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "An error occurred during signup"
      );
    }
    throw new Error("Network or server error");
  }
};

export const Signupuser = async (
  email: string,
  password: string,
  userRole: string,
  username: string
) => {
  try {
    const response = await axios.post("/api/users/signup", {
      username: username,
      email: email,
      userRole: userRole,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
      throw new Error(
        error.response.data.message || "An error occurred during signup"
      );
    }
    throw new Error("Network or server error");
  }
};
export const verifyOtp = async (email: string, otp: string) => {
  try {
    const response = await axios.post("/api/users/verifyOtp", {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "An error occurred during signup"
      );
    }
    throw new Error("Network or server error");
  }
};
export const getGigs = async () => {
  try {
    const response = await axios.get("/api/gigs/gig");
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "An error occurred during fetching gigs"
      );
    }
    throw new Error("Network or server error");
  }
};
export const getGigbyId = async (gigId: string) => {
  try {
    const response = await axios.get(`/api/gigs/${gigId}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "An error occurred during fetching gigs"
      );
    }
    throw new Error("Network or server error");
  }
};
export const getBids = async (gigId: string) => {
  try {
    const response = await axios.get(`/api/gigs/${gigId}/bids`, );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "An error occurred during fetching gigs"
      );
    }
    throw new Error("Network or server error");
  }
};
export const getProfile = async (userId: string) => {
  try {
    const response = await axios.get(`/api/profile/${userId}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message ||
          "An error occurred during fetching profile"
      );
    }
    throw new Error("Network or server error");
  }
};
export const getBid = async (bidId: string) => {
  try {
    const response = await axios.get(`/api/bids/${bidId}`, );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message ||
          "An error occurred during fetching profile"
      );
    }
    throw new Error("Network or server error");
  }
};
export const logOut = async () => {
  try {
    Cookies.remove("userId");
    Cookies.remove("token");

    toast.success("Successfully logged out.");
  } catch (error) {
    toast.error("An error occurred while logging out.");
    console.error("Logout error:", error);
  }
};
export const getNotifications = async () => {
  try {
    const response = await axios.get(`/api/notifications`, );
   return response;
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
};