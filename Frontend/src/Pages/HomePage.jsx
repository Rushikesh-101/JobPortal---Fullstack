import { Link } from "react-router-dom";    

function HomePage(){
            // <>
        // <h1>LOGIN PAGE</h1>
        //     <Link to="/applicant">
        //         <button>Applicant</button>
        //     </Link>
        //     <Link to="/recruiter">
        //         <button>Recruiter</button>
        //     </Link>
            

        // </>

    return(
        <div>

            <h1>Job Portal</h1>

            <h2>Welcome</h2>

            <p>
                Find jobs and manage your applications.
            </p>


            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>


            <br />
            <br />


            <Link to="/register">
                <button>
                    Register
                </button>
            </Link>

        </div>
    
    )
}


export default HomePage;