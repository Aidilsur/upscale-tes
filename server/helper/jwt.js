import jwt from "jsonwebtoken";

export function signPayload(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "6h" });
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
