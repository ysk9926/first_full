import express from "express";

const globalRouter = express.Router();

const Home = (req, res) => {
  res.send("Home");
};

globalRouter.get("/", Home);

export default globalRouter;
