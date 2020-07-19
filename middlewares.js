import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Profile Earth";
  res.locals.routes = routes;

  next();
};

const multerProfile = multer({ dest: "uploads/profiles" });
export const profileUpload = multerProfile.single("profileUpload");
