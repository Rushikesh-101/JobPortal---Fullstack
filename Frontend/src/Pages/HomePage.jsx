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
        <div className="home-page page-shell">
            <div className="hero-card">
            <div className="brand-mark">JP</div>
            <h1>Job Portal</h1>

            <h2>Welcome</h2>

            <p>
                Find jobs and manage your applications.
            </p>
            <div className="home-actions">


            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>





            <Link to="/register">
                <button>
                    Register
                </button>
            </Link>
            </div>
            </div>
        </div>
    
    )
}


export default HomePage;