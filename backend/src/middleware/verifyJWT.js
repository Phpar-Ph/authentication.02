import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized no header" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded.id) {
      req.userId = decoded.id;
      next();
    }
  } catch (err) {
    return res.status(403).json({ message: "Forbidden does not match" });
  }
};
