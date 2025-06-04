import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized no token" });
  }
  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    if (decoded.id) {
      req.userId = decoded.id;
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Login" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;
