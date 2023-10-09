import { Router } from "express";
import { getOutlates, postOutlates } from "../controllers/outlates.js";

const outlatesRouter = Router();

outlatesRouter.get('/', getOutlates);

outlatesRouter.post('/', postOutlates);

export default outlatesRouter;