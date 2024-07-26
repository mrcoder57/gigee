import axios from "axios";

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
      email,
      password,
      username,
      userRole,
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
export const verifyOtp = async (email: string, otp: string) => {
  try {
    const response = await axios.post("/api/users/login", {
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
