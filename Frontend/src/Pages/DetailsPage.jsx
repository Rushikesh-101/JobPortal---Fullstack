import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

function DetailsPage() {
    const { id } = useParams();
    const [Details, setDetails] = useState({});

    useEffect(() => {
        async function getDetails() {

            try{const response = await axios.get(
                `http://localhost:3000/jobs/details/${id}`,
                { withCredentials: true }
            );
            console.log("Response:", response);
            console.log("Response data:", response.data);
            setDetails(response.data);

        }catch (error) {

            if (error.response.status === 401) {

                console.log(error.response.data.message);

                navigate("/login");
            }
        }
        }

        getDetails();
    }, [id]);

    return (
        <div className="page-shell details-page"><div className="details-card"><div className="details-top"><span className="eyebrow">Job #{Details.id}</span><span className="status-badge">Open Position</span></div>
            <p>Job id : {Details.id}</p>
            <h1>Role : {Details.title}</h1>
            <h2>Company : {Details.company}</h2>
            <h2>Location : {Details.location}</h2>
            <h2>Type : {Details.type}</h2>
            <h2>Experience : {Details.experience}</h2>
            <h2>Salary : {Details.salary}</h2>
            <h2>Description : {Details.description}</h2>
            <h2>Skills : {Details.skills}</h2>
            <h2>Posted date : {Details.postedDate}</h2>
            <div className="details-action"><Link to={`/applications/form/${id}`}><button className="primary-button">Apply for this Job</button></Link></div></div></div>
    );
}

export default DetailsPage;
