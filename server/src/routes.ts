import express from "express";

const routes = express.Router();

routes.post("/classes", (req, res) => {
  return res.json({ message: "OK" });
});

export default routes;
