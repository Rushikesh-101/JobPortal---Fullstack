import {
    getAllJobsService,
    getDetailsService,
    getRcrtrJobsService,
    postJobsService,
    updateJobsService,
    deleteJobsService
} from "../services/jobs.services.js";


export async function allJobsController(req, res) {

    try {

        const jobs = await getAllJobsService();

        res.status(200).json(jobs);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch jobs"
        });
    }
}


export async function getDetailsController(req, res) {

    try {

        const id = Number(req.params.id);

        const details = await getDetailsService(id);

        res.status(200).json(details);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch job details"
        });
    }
}


export async function getRcrtrJobsController(req, res) {

    try {

        const rcrtrId = Number(req.params.id);

        const jobs = await getRcrtrJobsService(rcrtrId);

        res.status(200).json(jobs);

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Failed to fetch recruiter jobs"
        });
    }
}


export async function postJobsController(req, res) {

    try {

        const formData = req.body;

        const job = await postJobsService(formData);

        res.status(201).json(job);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false
        });
    }
}


export async function updateJobsController(req, res) {

    try {

        const id = Number(req.params.id);
        const formData = req.body;

        const updatedJob = await updateJobsService(id, formData);

        res.status(200).json(updatedJob);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to update job"
        });
    }
}


export async function deleteJobsController(req, res) {

    try {

        const id = Number(req.params.id);

        await deleteJobsService(id);

        res.status(200).json({
            success: true
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to delete job"
        });
    }
}
