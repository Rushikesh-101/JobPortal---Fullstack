import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    function handleSubmit(event) {

        // Prevent default browser form submission
        event.preventDefault();

        submitData();
    }


    async function submitData() {

        try {
            // will recieve the login token here
            const response= await axios.post(
                "http://localhost:3000/auth/login",
                {
                    email,
                    password
                },
                {
                withCredentials: true
                }
            );


            if (response.status === 200) {

                const userId = Number(response.data.id)

                if (response.data.role === "RECRUITER") {

                    navigate(`/recruiter/${userId}`)
                }

                else if (response.data.role === "APPLICANT") {

                    navigate(`/applicant/${userId}`)
                }

            }
        } catch (error) {

            console.log(error);

        }
    }


    return (

        <div className="auth-page page-shell"><div className="auth-card"><div className="auth-heading"><div className="brand-mark">JP</div><h1>Welcome back</h1><p>Log in to continue to the Job Portal.</p></div><form className="styled-form" onSubmit={handleSubmit}>

            <label className="form-label">Email:</label>

            <input
                type="email"
                value={email}
                onChange={(event) =>
                    setEmail(event.target.value)
                }
            />

            <br />


            <label className="form-label">Password:</label>

            <input
                type="password"
                value={password}
                onChange={(event) =>
                    setPassword(event.target.value)
                }
            />

            <br />


            <button className="primary-button" type="submit">
                Login
            </button>

        </form></div></div>
    );
}

export default LoginForm;