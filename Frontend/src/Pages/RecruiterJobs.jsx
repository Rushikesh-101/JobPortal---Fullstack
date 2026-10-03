import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecruiterJobs() {
    console.log("RcrtrJobs page invoked")
    const { id } = useParams();
    const userId = Number(id)
    const [myjobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs() {
            try {const response = await axios.get(
                `http://localhost:3000/jobs/recruiter/${userId}`,
                { withCredentials: true }
            );
            setJobs(response.data);
        }catch (error) {

            if (error.response.status === 401) {

                console.log(error.response.data.message);

                navigate("/login");
            }
        }

    }
        getJobs();
    }, [userId]);

    return (
        <div className="page-shell listing-page"><div className="page-header"><div><h1>My Jobs</h1><p>Manage the jobs you have posted.</p></div><span className="count-badge">{myjobs.length} jobs</span></div><div className="card-grid">
            {myjobs.map((job) => (
                <Link className="item-link" to={`/recruiter/job/${job.id}`} key={job.id}>
                    <div className="job-card">
                        <h2>{job.title}</h2>
                        <p>Company: {job.company}</p>
                        <p>Job ID: {job.id}</p>
                    </div>
                </Link>
            ))}
            </div><div className="list-action"><Link to={`/jobform/${id}`}><button className="primary-button">Create New Job</button></Link></div></div>
    );
}

export default RecruiterJobs;
