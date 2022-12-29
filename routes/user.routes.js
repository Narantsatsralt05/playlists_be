const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router
  .post("/login", userController.loginUser)
  .get("/users", userController.getUsers)
  .get("/users/:id", userController.getUser)
  .post("/users", userController.createUser)
  .put("/users/:id", () => {})
  .delete("/users/:id", () => {});

exports.userRoutes = router;
