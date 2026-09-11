import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecruiterApplications() {
    const [myApplications, setApplications] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getApplications() {
            const response = await axios.get(
                `http://localhost:3000/applications/recruiter/${id}`,
                { withCredentials: true }
            );
            setApplications(response.data);
        }
        getApplications();
    }, [id]);

    return (
        <>
            {myApplications.map((application) => (
                <div key={`${application.jobId}-${application.name}`}>
                    <h2></h2>
                    <p>Job ID: {application.jobId}</p>
                    <p>Name: {application.name}</p>
                    <p>Place: {application.place}</p>
                    <p>Expected Salary: {application.expectedSalary}</p>
                </div>
            ))}
        </>
    );
}

export default RecruiterApplications;
