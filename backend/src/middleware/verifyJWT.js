import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;
  console.log(authHeader);
  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized no header" });
  }

  const accessToken = authHeader.split(" ")[1];
  console.log(accessToken);
  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if (decoded.id) {
      req.userId = decoded.id;
      next();
    }
  } catch (err) {
    return res.status(403).json({ message: "Forbidden does not match" });
  }
};

export default verifyJWT;
