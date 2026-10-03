import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobsPage() {
    // Storing requested data inside component state
    const [jobs, setJobs] = useState([]);

    // Making API request using axios inside useEffect
    useEffect(() => {
        async function getJobs() {

            try{const response = await axios.get(
                "http://localhost:3000/jobs",
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
    }, []);

    return (
        <div className="page-shell listing-page"><div className="page-header"><div><h1>Available Jobs</h1><p>Explore current job opportunities.</p></div><span className="count-badge">{jobs.length} jobs</span></div><div className="card-grid">
            {console.log(jobs)}
            {jobs.map((job) => (
                <Link className="item-link" to={`/details/${job.id}`} key={job.id}>
                    <div className="job-card">
                        <h2>{job.title}</h2>
                        <p>Job id: {job.id}</p>
                        <p>Company: {job.company}</p>
                        <h1></h1>
                        <h1></h1>
                    </div>
                </Link>
            ))}
        </div></div>
    );
}

export default JobsPage;
