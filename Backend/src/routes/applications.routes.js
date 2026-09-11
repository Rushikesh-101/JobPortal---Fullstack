import express from "express";
import {
    getAplcntApplicationController,
    postApplicationFormController,
    getRcrtrApplicationController,
    getApplicationDetailsController,
    updateApplicationController,
    deleteApplicationController
} from "../controllers/applications.controller.js";

const applicationRouter = express.Router();


applicationRouter.post("/form", postApplicationFormController);

applicationRouter.get(
    "/applicant/:id",
    getAplcntApplicationController
);

applicationRouter.get(
    "/recruiter/:id",
    getRcrtrApplicationController
);

applicationRouter.get(
    "/details/:id",
    getApplicationDetailsController
);

applicationRouter.put(
    "/:id",
    updateApplicationController
);

applicationRouter.delete(
    "/:id",
    deleteApplicationController
);


export default applicationRouter;
