import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        submitData();
    }

    async function submitData() {
        try {
        const response = await axios.post(
            "http://localhost:3000/auth/register",
            {
                name,
                email,
                password,
                confirmPassword,
                role
            },
            {
                withCredentials: true
            }
        );

        if (response.status === 201) {
            navigate("/login");
        }
        }
        
        catch (error) {
        setErrorMessage(error.response.data.message);
        }
    }

    return (

        <div className="auth-page page-shell"><div className="auth-card"><div className="auth-heading"><div className="brand-mark">JP</div><h1>Create your account</h1><p>Join the Job Portal as a recruiter or applicant.</p></div><form className="styled-form" onSubmit={handleSubmit}>

            <label className="form-label">Name:</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <br />

            <label className="form-label">Email:</label>
            <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <br />

            <label className="form-label">Password:</label>
            <input
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <br />

            <label className="form-label">Confirm Password:</label>
            <input
                type="text"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <br />

            <label className="form-label">Role:</label>

            <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
            >
                <option value="">
                    Select Role
                </option>

                <option value="RECRUITER">
                    Recruiter
                </option>

                <option value="APPLICANT">
                    Applicant
                </option>
            </select>

            <br />

            <button className="primary-button" type="submit">
                Register
            </button>

            <br/>
            {errorMessage && <p>{errorMessage}</p>}
            <br/>

        </form></div></div>
    );
}

export default RegisterForm;


/*
Axios behavior:

2xx responses → go to the try block.

4xx / 5xx responses → Axios treats them as errors
and directly goes to the catch block.

Backend error message:
error.response.data.message
*/