import { Link, useParams } from "react-router-dom";


function RecruiterPage(){
const { id } = useParams();

const userId = Number(id);

return(
        <>
    
        <h1>Welcome Recruiter</h1>

            <Link to={`/recruiter/jobs/${userId}`}>
                <button>MyJobs</button>
            </Link>
            <Link to={`/recruiter/applications/${userId}`}>
            <button>MyApplications</button>
            </Link>
    
    </>
    )

}
export default RecruiterPage;