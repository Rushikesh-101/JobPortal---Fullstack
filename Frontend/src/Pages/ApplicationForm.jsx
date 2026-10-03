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

        try{const response = await axios.post(
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
    }catch (error) {

            if (error.response.status === 401) {

                console.log(error.response.data.message);

                navigate("/login");
            }
        }
    }

    return (
        <div className="page-shell form-page"><div className="form-card"><form className="styled-form" onSubmit={handleSubmit}>
            <label className="form-label">Name:</label>
            <input className="form-input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <label className="form-label">Skills:</label>
            <input className="form-input" type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
            <br />
            <label className="form-label">Expected Salary (LPA):</label>
            <input className="form-input" type="number" value={expectedSalary} onChange={(event) => setExpectedSalary(event.target.value)} />
            <br />
            <button className="primary-button" type="submit">Submit Application</button>
        </form></div></div>
    );
}

export default ApplicationForm;
