import express from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.get("/current", validateToken, currentUser);
router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
