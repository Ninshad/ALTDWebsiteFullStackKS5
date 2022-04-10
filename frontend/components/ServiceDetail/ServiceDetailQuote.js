import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { Spinner } from "react-bootstrap";


export const SERVICE_DETAIL_QUERY = gql`
query SERVICE_DETAIL_QUERY($slug: String!) {
    
    allServices(where: { slug: $slug }){
        id
        getQuoteHeading
        getQuoteImage{
          id
          publicUrlTransformed
        }
        showCta
    	CtaLabel
  		CtaUrl
            
    }
}`

const ServiceDetailQuote = ({slug}) => {

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
        <div key={allServicesData.id}>
        <section id="service-cover" >
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h2> {allServicesData.getQuoteHeading} </h2>
                </div>
                <Link href={`/${allServicesData.CtaUrl}`}>
                <div className="col-md-4">
                    <a  className="btn btn-black"> {allServicesData.CtaLabel} </a>
                </div>
                </Link>
            </div>
        </div>
    </section>
    <section id="service-cover-2">
    
        <img src={allServicesData.getQuoteImage.publicUrlTransformed} alt="bg_image" className="bg_img" />
    
    </section>
    </div>
        )}
        </>
        
    )
}

export default ServiceDetailQuote
