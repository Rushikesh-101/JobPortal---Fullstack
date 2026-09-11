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
            const response = await axios.get(
                `http://localhost:3000/jobs/recruiter/${userId}`,
                { withCredentials: true }
            );
            setJobs(response.data);
        }
        getJobs();
    }, [userId]);

    return (
        <>
            {myjobs.map((job) => (
                <Link to={`/recruiter/job/${job.id}`} key={job.id}>
                    <div>
                        <h2>{job.title}</h2>
                        <p>Company: {job.company}</p>
                        <p>Job ID: {job.id}</p>
                    </div>
                </Link>
            ))}
            <Link to={`/jobform/${id}`}>
                <button>Create new job</button>
            </Link>
        </>
    );
}

export default RecruiterJobs;
