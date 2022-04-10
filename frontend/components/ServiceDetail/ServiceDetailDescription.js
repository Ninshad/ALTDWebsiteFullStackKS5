import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Spinner } from "react-bootstrap";


export const SERVICE_DETAIL_QUERY = gql`
query SERVICE_DETAIL_QUERY($slug: String!) {
    
    allServices(where: { slug: $slug }){
        id
        serviceSubHeading
        serviceSubText
    }
}`


const ServiceDetailDescription = ({ slug }) => {

    const { data, error, loading } = useQuery(SERVICE_DETAIL_QUERY, {
        variables: {
            slug,
        },
    });

    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>

    return (
        <>
            {data.allServices.map((allServicesData) =>
                <section id="about-service" key={allServicesData.id}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="offset-lg-2 col-lg-5">
                                <h2> {allServicesData.serviceSubHeading} </h2>
                            </div>
                            <div className="col-lg-4">
                                <div dangerouslySetInnerHTML={{ __html: `<p>${allServicesData.serviceSubText}<p>` }} />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default ServiceDetailDescription
