import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ApplicationForm() {
    const [name, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [expectedSalary, setExpectedSalary] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const applicantId = 5;

    function handleSubmit(event) {
        event.preventDefault();
        submitData();
    }

    async function submitData() {
        const response = await axios.post(
            "http://localhost:3000/applications/form",
            {
                name,
                skills,
                expectedSalary: Number(expectedSalary),
                jobId: Number(id),
                applicantId: applicantId
            },
            { withCredentials: true }
        );

        if (response.status === 201) {
            navigate("/jobs");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <label>Skills:</label>
            <input type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
            <br />
            <label>Expected Salary (LPA):</label>
            <input type="number" value={expectedSalary} onChange={(event) => setExpectedSalary(event.target.value)} />
            <br />
            <button type="submit">Submit Application</button>
        </form>
    );
}

export default ApplicationForm;
