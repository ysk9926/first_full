import express from "express";
import { edit, trending, watch } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);
videoRouter.get("/trending", trending);

export default videoRouter;
