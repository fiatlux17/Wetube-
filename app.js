import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter} from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hi world!!")
const handleProfile = (req, res) => {
    res.send("Hi!! it's profilsse")
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(morgan("dev"));
app.use(helmet());

app.use("/", userRouter);
app.get("/profile", handleProfile);

export default app;

