import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecruiterApplications() {
    const [myApplications, setApplications] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getApplications() {

            try{const response = await axios.get(
                `http://localhost:3000/applications/recruiter/${id}`,
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
        <div className="page-shell listing-page"><div className="page-header"><div><h1>Applications</h1><p>Review applications submitted to your jobs.</p></div><span className="count-badge">{myApplications.length} applications</span></div><div className="card-grid">
            {myApplications.map((application) => (
                <div className="application-card" key={`${application.jobId}-${application.name}`}>
                    <h2></h2>
                    <p>Job ID: {application.jobId}</p>
                    <p>Name: {application.name}</p>
                    <p>Place: {application.place}</p>
                    <p>Expected Salary: {application.expectedSalary}</p>
                </div>
            ))}
        </div></div>
    );
}

export default RecruiterApplications;
