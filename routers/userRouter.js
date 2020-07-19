import express from "express";
import routes from "../routes";
import {
  userDetail,
  editUserProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editUserProfile, editUserProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
