import { Link, useParams } from "react-router-dom";

function ApplicantPage(){
const { id } = useParams();

const userId = Number(id);

return(
        <div className="dashboard-page page-shell"><div className="dashboard-card"><div className="dashboard-icon">A</div>
    
        <h1>Welcome Applicant</h1><p className="page-subtitle">Find opportunities and keep track of your applications.</p><div className="dashboard-actions">

            <Link to="/jobs">
                <button className="primary-button">Browse Jobs</button>
            </Link>

            <Link to={`/applicant/applications/${userId}`}>
            <button className="secondary-button">My Applications</button>
            </Link>
    
    </div></div></div>
    )
}
export default ApplicantPage;