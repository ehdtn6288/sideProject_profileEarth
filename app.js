import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes";
import homeRouter from "./routers/homeRouter";
import userRouter from "./routers/userRouter";
import profileRouter from "./routers/profileRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.use(helmet());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(localsMiddleware);

app.use(routes.home, homeRouter);
app.use(routes.users, userRouter);
app.use(routes.profiles, profileRouter);

export default app;
