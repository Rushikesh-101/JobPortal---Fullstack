import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import LoginForm from "./Pages/LoginForm";
import RegisterForm from "./Pages/RegisterForm";

import JobsPage from "./Pages/JobsPage";

import DetailsPage from "./Pages/DetailsPage";
import ApplicationForm from "./Pages/ApplicationForm";
import RecruiterPage from "./Pages/RecruiterPage";
import ApplicantPage from "./Pages/ApplicantPage";
import ApplicantApplications from "./Pages/ApplicantApplications";
import RecruiterApplications from "./Pages/RecruiterApplications";
import RecruiterJobs from "./Pages/RecruiterJobs";
import JobForm from "./Pages/JobForm";
import JobManagement from "./Pages/JobManagement";
import ApplicationManagement from "./Pages/ApplicationManagement";


function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path ="/login" element ={<LoginForm/>}/>
                <Route path = "/register" element ={<RegisterForm/>}/>

                <Route path="/recruiter/:id" element={<RecruiterPage />} />
                <Route path="/applicant/:id" element={<ApplicantPage />} />

                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />


                <Route
                    path="/recruiter/applications/:id"
                    element={<RecruiterApplications />}
                />
                <Route
                    path="/recruiter/jobs/:id"
                    element={<RecruiterJobs />}
                />
                <Route path="/jobform/:id" element={<JobForm />} />


                <Route
                    path="/applicant/applications/:id"
                    element={<ApplicantApplications />}
                />
                <Route path="/applications/form/:id" element={<ApplicationForm />} />


                <Route
                    path="/recruiter/job/:id"
                    element={<JobManagement />}
                />

                <Route
                    path="/applicant/application/:id"
                    element={<ApplicationManagement />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
