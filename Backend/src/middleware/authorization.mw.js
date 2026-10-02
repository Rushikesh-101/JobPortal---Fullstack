// Create 2 functions 

// 1. To approve recruiter requests
export function recruiterAuth(req, res, next) {

    if (req.user.role === "RECRUITER") {
        next();

    } else {

        return res.status(403).json({
            success: false,
            message: "Access denied"
        });
    }
}


// 2. To approve applicant requests 
export function applicantAuth(req, res, next) {

    if (req.user.role === "APPLICANT") {

        next();

    } else {

        return res.status(403).json({
            success: false,
            message: "Access denied"
        });
    }
}
