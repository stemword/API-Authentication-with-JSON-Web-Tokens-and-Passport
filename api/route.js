import express from "express";
import SuppliersCtrl from "./suppliers.controller.js";
import passport from "passport";

const router = express.Router();
router.route("/login").post(SuppliersCtrl.apiPostLogin);
router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  SuppliersCtrl.apiTest
);
export default router;
