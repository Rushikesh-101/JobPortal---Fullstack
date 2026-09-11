import { Link, useParams } from "react-router-dom";

function ApplicantPage(){
const { id } = useParams();

const userId = Number(id);

return(
        <>
    
        <h1>Welcome Applicant</h1>

            <Link to="/jobs">
                <button>AllJobs</button>
            </Link>

            <Link to={`/applicant/applications/${userId}`}>
            <button>MyApplications</button>
            </Link>
    
    </>
    )
}
export default ApplicantPage;