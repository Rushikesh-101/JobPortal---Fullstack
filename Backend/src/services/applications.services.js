import prisma from "../config/prisma.js";


export async function getAplcntApplicationsService(id) {

    const applications = await prisma.application.findMany({
        where: {
            applicantId: id
        }
    });

    return applications;
}


export async function postApplicationFormService(formData) {

    const application = await prisma.application.create({
        data: formData
    });

    return application;
}


export async function getRcrtrApplicationService(recruiterId) {

    const applications = await prisma.application.findMany({

        where: {
            job: {
                recruiterId: recruiterId
            }
        }

    });

    return applications;
}


export async function getApplicationDetailsService(id) {

    const application = await prisma.application.findUnique({
        where: {
            id: id
        }
    });

    return application;
}


export async function updateApplicationService(id, formData) {

    const updatedApplication = await prisma.application.update({
        where: {
            id: id
        },
        data: formData
    });

    return updatedApplication;
}


export async function deleteApplicationService(id) {

    const deletedApplication = await prisma.application.delete({
        where: {
            id: id
        }
    });

    return deletedApplication;
}
