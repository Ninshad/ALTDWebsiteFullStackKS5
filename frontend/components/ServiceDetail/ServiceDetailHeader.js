import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Spinner } from "react-bootstrap";


export const SERVICE_DETAIL_QUERY = gql`
query SERVICE_DETAIL_QUERY($slug: String!) {
    
    allServices(where: { slug: $slug }){
      id
      name
      serviceDetailHeaderImage{
          id
          publicUrlTransformed
      }
    }
}`




const ServiceDetailHeader = ({slug}) => {

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
            <section id="services-item" key={allServicesData.id}>
                <div className="container-fluid">
                    
                    <div className="row align-items-center">
                        <div className="offset-md-1 col-md-6">
                            <div className="item-wrap">
                                <h3> {allServicesData.name} </h3>
                                <h1>We are leading development company
                                    that deliver excellent development solutions<span className="primary-font">.</span></h1>
                            </div>
                        </div>
                        
                        
                        <div className="col-md-5" >
                            <img src={allServicesData.serviceDetailHeaderImage.publicUrlTransformed} alt="service item image" width="100%" />
                        </div>
                    </div>
                    
                </div>
            </section>
            )}
        </>

    )
}

export default ServiceDetailHeader
