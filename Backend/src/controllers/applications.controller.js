import {
    getAplcntApplicationsService,
    postApplicationFormService,
    getRcrtrApplicationService,
    getApplicationDetailsService,
    updateApplicationService,
    deleteApplicationService
} from "../services/applications.services.js";


export async function getAplcntApplicationController(req, res) {

    try {

        const id = req.user.id

        const applications =
            await getAplcntApplicationsService(id);

        res.status(200).json(applications);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch applications"
        });
    }
}


export async function postApplicationFormController(req, res) {

    try {

        const formData = req.body;

        const application =
            await postApplicationFormService(formData);

        res.status(201).json(application);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false
        });
    }
}


export async function getRcrtrApplicationController(req, res) {

    try {

        const recruiterId = req.user.id;

        const applications =
            await getRcrtrApplicationService(recruiterId);

        res.status(200).json(applications);

    } catch (error) {

        res.status(500).json({
            success: false
        });
    }
}


export async function getApplicationDetailsController(req, res) {

    try {

        const id = Number(req.params.id);

        const application =
            await getApplicationDetailsService(id);

        res.status(200).json(application);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch application details"
        });
    }
}


export async function updateApplicationController(req, res) {

    try {

        const id = Number(req.params.id);
        const formData = req.body;

        const updatedApplication =
            await updateApplicationService(id, formData);

        res.status(200).json(updatedApplication);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to update application"
        });
    }
}


export async function deleteApplicationController(req, res) {

    try {

        const id = Number(req.params.id);

        await deleteApplicationService(id);

        res.status(200).json({
            success: true
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to delete application"
        });
    }
}