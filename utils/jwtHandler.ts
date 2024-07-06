import jwt from "jsonwebtoken";
const JWT_SECRET=process.env.jwt_secret!;
export const generateToken = (user:any) => {
    // Payload to include in the token. Typically, you include user details like id, email, etc.
    const payload = {
        id: user._id,
        email: user.email
    };

    // Generate the token with an expiration time (e.g., 1 hour)
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
};