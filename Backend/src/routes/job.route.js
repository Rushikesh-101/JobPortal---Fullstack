import express from "express";
import {
    allJobsController,
    getDetailsController,
    getRcrtrJobsController,
    postJobsController,
    updateJobsController,
    deleteJobsController
} from "../controllers/jobs.controller.js";

const jobRouter = express.Router();


jobRouter.get("/", allJobsController);

jobRouter.get("/details/:id", getDetailsController);

jobRouter.get("/recruiter/:id", getRcrtrJobsController);

jobRouter.post("/form", postJobsController);

jobRouter.put("/:id", updateJobsController);

jobRouter.delete("/:id", deleteJobsController);


export default jobRouter;
