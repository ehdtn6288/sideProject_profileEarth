import express from "express";
import routes from "../routes";
import {
  profileDetail,
  postEditProfile,
  getEditProfile,
  getDeleteProfile,
  postDeleteProfile,
} from "../controllers/profileController";

const profileRouter = express.Router();

profileRouter.get(routes.profileDetail(), profileDetail);

profileRouter.get(routes.editProfile(), getEditProfile);
profileRouter.post(routes.editProfile(), postEditProfile);

profileRouter.get(routes.deleteProfile(), getDeleteProfile);

export default profileRouter;
