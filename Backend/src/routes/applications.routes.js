import express from "express";
import {
    getAplcntApplicationController,
    postApplicationFormController,
    getRcrtrApplicationController,
    getApplicationDetailsController,
    updateApplicationController,
    deleteApplicationController
} from "../controllers/applications.controller.js";
import { authMiddleware } from "../middleware/auth.mw.js";
import { recruiterAuth } from "../middleware/authorization.mw.js";
import { applicantAuth } from "../middleware/authorization.mw.js";

const applicationRouter = express.Router();


applicationRouter.post("/form", authMiddleware,applicantAuth, postApplicationFormController);

applicationRouter.get(
    "/applicant/:id", authMiddleware ,applicantAuth,
    getAplcntApplicationController
);

applicationRouter.get(
    "/recruiter/:id", authMiddleware, recruiterAuth,
    getRcrtrApplicationController
);

applicationRouter.get(
    "/details/:id", authMiddleware ,applicantAuth,
    getApplicationDetailsController
);

applicationRouter.put(
    "/:id", authMiddleware ,applicantAuth,
    updateApplicationController
);

applicationRouter.delete(
    "/:id", authMiddleware ,applicantAuth,
    deleteApplicationController
);


export default applicationRouter;
