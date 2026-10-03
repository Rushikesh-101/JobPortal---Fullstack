import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function JobManagement() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [experience, setExperience] = useState(0);
    const [salary, setSalary] = useState(0);
    const [skills, setSkills] = useState("");
    const [recruiterId, setRecruiterId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getJobDetails() {
            
            try {
                const response = await axios.get(
                    `http://localhost:3000/jobs/details/${id}`,
                    { withCredentials: true }
                );

                const job = response.data;
                setTitle(job.title);
                setCompany(job.company);
                setExperience(job.experience);
                setSalary(job.salary);
                setSkills(job.skills);
                setRecruiterId(job.recruiterId);

            } catch (error) {

                if (error.response.status === 401) {

                    console.log(error.response.data.message);

                    navigate("/login");
                }
            }
        }

        getJobDetails();
    }, [id]);

    async function handleUpdate(event) {
        event.preventDefault();

        await axios.put(
            `http://localhost:3000/jobs/${id}`,
            { title, company, experience, salary, skills },
            { withCredentials: true }
        );

        navigate(`/recruiter/jobs/${recruiterId}`);
    }

    async function handleDelete() {
        await axios.delete(
            `http://localhost:3000/jobs/${id}`,
            { withCredentials: true }
        );

        navigate(`/recruiter/jobs/${recruiterId}`);
    }

    return (
        <div className="page-shell form-page">

            <div className="form-card">

                <h1>Manage Job</h1>

                <form className="styled-form" onSubmit={handleUpdate}>

                    <label className="form-label">Job Title:</label>
                    <input
                        className="form-input"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <label className="form-label">Company:</label>
                    <input
                        className="form-input"
                        type="text"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                    />

                    <label className="form-label">Experience:</label>
                    <input
                        className="form-input"
                        type="number"
                        value={experience}
                        onChange={(event) => setExperience(Number(event.target.value))}
                    />

                    <label className="form-label">Salary:</label>
                    <input
                        className="form-input"
                        type="number"
                        value={salary}
                        onChange={(event) => setSalary(Number(event.target.value))}
                    />

                    <label className="form-label">Skills:</label>
                    <input
                        className="form-input"
                        type="text"
                        value={skills}
                        onChange={(event) => setSkills(event.target.value)}
                    />

                    <button className="primary-button" type="submit">
                        Update Job
                    </button>

                </form>

                <br />

                <button className="primary-button" onClick={handleDelete}>
                    Delete Job
                </button>

            </div>

        </div>
    );
}

export default JobManagement;   