import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ApplicantApplications() {
    const [myApplications, setApplications] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getApplications() {
            const response = await axios.get(
                `http://localhost:3000/applications/applicant/${id}`,
                { withCredentials: true }
            );
            setApplications(response.data);
        }
        getApplications();
    }, [id]);

    return (
        <>
            {myApplications.map((application) => (
                <Link to={`/applicant/application/${application.id}`} key={application.id}>
                    <div>
                        <p>Application ID: {application.id}</p>
                        <p>Job ID: {application.jobId}</p>
                        <p>Name: {application.name}</p>
                        <p>Skills: {application.skills}</p>
                        <p>Expected Salary: {" "}{application.expectedSalary}</p>
                        <h1></h1>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default ApplicantApplications;
