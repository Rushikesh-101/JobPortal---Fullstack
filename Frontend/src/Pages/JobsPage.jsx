import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobsPage() {
    // Storing requested data inside component state
    const [jobs, setJobs] = useState([]);

    // Making API request using axios inside useEffect
    useEffect(() => {
        async function getJobs() {
            const response = await axios.get(
                "http://localhost:3000/jobs",
                { withCredentials: true }
            );
            setJobs(response.data);
        }
        getJobs();
    }, []);

    return (
        <>
            {console.log(jobs)}
            {jobs.map((job) => (
                <Link to={`/details/${job.id}`} key={job.id}>
                    <div>
                        <h2>{job.title}</h2>
                        <p>Job id: {job.id}</p>
                        <p>Company: {job.company}</p>
                        <h1></h1>
                        <h1></h1>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default JobsPage;
