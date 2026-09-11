import prisma from "../config/prisma.js";


export async function getAllJobsService() {

    const jobs = await prisma.job.findMany();

    return jobs;
}


export async function getDetailsService(jobId) {

    const details = await prisma.job.findUnique({
        where: {
            id: jobId
        }
    });

    return details;
}


export async function getRcrtrJobsService(rcrtrId) {

    const jobs = await prisma.job.findMany({
        where: {
            recruiterId: rcrtrId
        }
    });

    return jobs;
}


export async function postJobsService(formData) {

    const job = await prisma.job.create({
        data: formData
    });

    return job;
}


export async function updateJobsService(id, formData) {

    const updatedJob = await prisma.job.update({
        where: {
            id: id
        },
        data: formData
    });

    return updatedJob;
}


export async function deleteJobsService(id) {

    const deletedJob = await prisma.job.delete({
        where: {
            id: id
        }
    });

    return deletedJob;
}
