import express from "express";
import routes from "../routes";
import {
  home,
  join,
  login,
  logout,
  search,
  getUpload,
  postUpload,
} from "../controllers/homeController";
import { profileUpload } from "../middlewares";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.join, join);
homeRouter.get(routes.login, login);
homeRouter.get(routes.logout, logout);

homeRouter.get(routes.upload, getUpload);
homeRouter.post(routes.upload, profileUpload, postUpload);

homeRouter.get(routes.search, search);

export default homeRouter;
