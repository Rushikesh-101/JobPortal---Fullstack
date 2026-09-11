import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ApplicationManagement() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [expectedSalary, setExpectedSalary] = useState(0);
    const [applicantId, setApplicantId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getApplicationDetails() {
            const response = await axios.get(
                `http://localhost:3000/applications/details/${id}`,
                { withCredentials: true }
            );
            const application = response.data;
            setName(application.name);
            setSkills(application.skills);
            setExpectedSalary(application.expectedSalary);
            setApplicantId(application.applicantId);
        }
        getApplicationDetails();
    }, [id]);

    async function handleUpdate(event) {
        event.preventDefault();
        await axios.put(
            `http://localhost:3000/applications/${id}`,
            { name, skills, expectedSalary },
            { withCredentials: true }
        );
        navigate(`/applicant/applications/${applicantId}`);
    }

    async function handleDelete() {
        await axios.delete(
            `http://localhost:3000/applications/${id}`,
            { withCredentials: true }
        );
        navigate(`/applicant/applications/${applicantId}`);
    }

    return (
        <>
            <h1>Manage Application</h1>
            <form onSubmit={handleUpdate}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <br />
                <label>Skills:</label>
                <input type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
                <br />
                <label>Expected Salary:</label>
                <input type="number" value={expectedSalary} onChange={(event) => setExpectedSalary(Number(event.target.value))} />
                <br />
                <button type="submit">Update Application</button>
            </form>
            <br />
            <button onClick={handleDelete}>Delete Application</button>
        </>
    );
}

export default ApplicationManagement;
