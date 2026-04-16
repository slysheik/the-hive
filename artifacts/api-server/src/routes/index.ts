import { Router, type IRouter } from "express";
import healthRouter from "./health";
import offersRouter from "./offers";
import redirectRouter from "./redirect";
import statsRouter from "./stats";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/offers", offersRouter);
router.use("/go", redirectRouter);
router.use("/stats", statsRouter);

export default router;
