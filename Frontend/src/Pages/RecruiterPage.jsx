import { Link, useParams } from "react-router-dom";


function RecruiterPage(){
const { id } = useParams();

const userId = Number(id);

return(
        <div className="dashboard-page page-shell"><div className="dashboard-card"><div className="dashboard-icon">R</div>
    
        <h1>Welcome Recruiter</h1><p className="page-subtitle">Create jobs and manage applications from one place.</p><div className="dashboard-actions">

            <Link to={`/recruiter/jobs/${userId}`}>
                <button className="primary-button">My Jobs</button>
            </Link>
            <Link to={`/recruiter/applications/${userId}`}>
            <button className="secondary-button">My Applications</button>
            </Link>
    
    </div></div></div>
    )

}
export default RecruiterPage;