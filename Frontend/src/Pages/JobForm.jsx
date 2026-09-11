import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function JobForm() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [experience, setExperience] = useState(0);
    const [salary, setSalary] = useState(0);
    const [skills, setSkills] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        // Prevent default browser form submission
        event.preventDefault();
        submitData();
    }

    async function submitData() {
        try {
            const response = await axios.post(
                "http://localhost:3000/jobs/form",
                {
                    title,
                    company,
                    experience,
                    salary,
                    skills,
                    recruiterId: Number(id)
                },
                { withCredentials: true }
            );
            if (response.status === 201) {
                navigate(`/recruiter/jobs/${id}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <label>Skills (separate with commas):</label>
            <input type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
            <br />
            <button type="submit">Create Job</button>
        </form>
    );
}

export default JobForm;
