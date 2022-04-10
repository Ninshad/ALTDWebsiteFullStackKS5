import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Spinner } from "react-bootstrap";


export const SERVICE_DETAIL_QUERY = gql`
query SERVICE_DETAIL_QUERY($slug: String!) {
    
    allServices(where: { slug: $slug }){
        id
        keyTakeAwayHeading
        serviceKeyTakeaway{
            id
            icon
            title
            description
          }   
    }
}`

const ServiceDetailKeyTakeaway = ({slug}) => {

    const { data, error, loading } = useQuery(SERVICE_DETAIL_QUERY, {
        variables: {
            slug,
        },
      });

      console.log(data);
      if (loading) return <Spinner animation="border" style={{color:"#E86124"}} />
      if (error) return <p></p>

    return (
        <>
        {data.allServices.map((allServicesData) =>
        
        <section id="service-detail" key={allServicesData.id}>
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <h3>KEY TAKE AWAY FROM US</h3>
                    <h2>{allServicesData.keyTakeAwayHeading}</h2>
                </div>

                {allServicesData.serviceKeyTakeaway.map((serviceKeyTakeawayData) =>
                <div className="col-md-6 col-lg-4" key={serviceKeyTakeawayData.id}>
                    <div className="card-item">
                        <div className="card-icon">
                            {serviceKeyTakeawayData.icon == "QualityAssurance" ?
                            <img src="assets/svg/service-detail/general/certified.svg" width="45px" alt="Service" height="45px" />
                            : serviceKeyTakeawayData.icon == "ExcellentSupport" ?
                            <img src="assets/svg/service-detail/general/support.svg" width="45px" alt="Service" height="45px" />
                            : serviceKeyTakeawayData.icon == "AffordablePrice" ?
                            <img src="assets/svg/service-detail/general/price.svg" width="45px" alt="Service" height="45px" />
                            : serviceKeyTakeawayData.icon == "GreaPartnership" ?
                            <img src="assets/svg/service-detail/general/shake-hand.svg" width="45px" alt="Service" height="45px" />
                            : serviceKeyTakeawayData.icon == "RestAssured" ?
                            <img src="assets/svg/service-detail/general/rest.svg" width="45px" alt="Service" height="45px" />
                            :<img src="assets/svg/service-detail/general/team.svg" width="45px" alt="Service" height="45px" />
                            }
                        </div>
                        <div className="service-title"> {serviceKeyTakeawayData.title} </div>
                        <div className="service-content-text" dangerouslySetInnerHTML={{ __html: `<p>${serviceKeyTakeawayData.description}<p>` }} />
                    </div>
                </div>
                )}
                
            </div>
        
            
        </div>
    </section>
    
    )}
    </>
    )
}

export default ServiceDetailKeyTakeaway
