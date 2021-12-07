import express from "express";
import cors from "cors";
import passport from "passport";
import routes from "./api/route.js";
import dotenv from "dotenv";
import { applyPassportStrategy } from "./store/passport.js";
const app = express();

dotenv.config();
app.use(cors());
app.use(passport.initialize());
applyPassportStrategy(passport);

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/", routes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("listening to port");
});
export default app;
