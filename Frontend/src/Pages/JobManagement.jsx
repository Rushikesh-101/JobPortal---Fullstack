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
        <>
            <h1>Manage Job</h1>
            <form onSubmit={handleUpdate}>
                <label>Job Title:</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <br />
                <label>Company:</label>
                <input type="text" value={company} onChange={(event) => setCompany(event.target.value)} />
                <br />
                <label>Experience:</label>
                <input type="number" value={experience} onChange={(event) => setExperience(Number(event.target.value))} />
                <br />
                <label>Salary:</label>
                <input type="number" value={salary} onChange={(event) => setSalary(Number(event.target.value))} />
                <br />
                <label>Skills:</label>
                <input type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
                <br />
                <button type="submit">Update Job</button>
            </form>
            <br />
            <button onClick={handleDelete}>Delete Job</button>
        </>
    );
}

export default JobManagement;
