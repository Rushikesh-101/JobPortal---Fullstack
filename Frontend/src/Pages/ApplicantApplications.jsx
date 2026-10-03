import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ApplicantApplications() {
    const [myApplications, setApplications] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getApplications() {

            try{const response = await axios.get(
                `http://localhost:3000/applications/applicant/${id}`,
                { withCredentials: true }
            );
            setApplications(response.data);
        }catch (error) {

            if (error.response.status === 401) {

                console.log(error.response.data.message);

                navigate("/login");
            }
        }
        
        }
        getApplications();
    }, [id]);

    return (
        <div className="page-shell listing-page"><div className="page-header"><div><h1>My Applications</h1><p>Track the jobs you have applied for.</p></div><span className="count-badge">{myApplications.length} applications</span></div><div className="card-grid">
            {myApplications.map((application) => (
                <Link className="item-link" to={`/applicant/application/${application.id}`} key={application.id}>
                    <div className="application-card">
                        <p>Application ID: {application.id}</p>
                        <p>Job ID: {application.jobId}</p>
                        <p>Name: {application.name}</p>
                        <p>Skills: {application.skills}</p>
                        <p>Expected Salary: {" "}{application.expectedSalary}</p>
                        <h1></h1>
                    </div>
                </Link>
            ))}
        </div></div>
    );
}

export default ApplicantApplications;
