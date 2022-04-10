import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Alert, Spinner } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from 'next/router'

export const SERVICE_QUERY = gql`
query SERVICE_QUERY {
    
    allServices{
	id
    name
    slug
    serviceWrapperId
    column
    serviceSubText
    serviceListingImage{
      id
      publicUrlTransformed
    
    }
  	
  }
}`




const ServicesOurServicesBlock = () => {

    const { data, error, loading } = useQuery(SERVICE_QUERY);

    
    console.log(data);
    if (loading) return <Spinner animation="border" style={{color:"#E86124"}} />
    if (error) return <p></p>

    const router = useRouter()
    return (
        <div>
            {data.allServices.map((serviceData) =>

            serviceData.column == "left"?

            <section className="services-item" key={serviceData.id}>
        <div className="container-fluid" id={serviceData.serviceWrapperId}>
            <div className="row align-items-center">
                <div className="offset-md-2 col-md-5">
                    <div className="item-wrap">
                        <h2> {serviceData.name} </h2> 
                        <div dangerouslySetInnerHTML={{__html: `<p>${serviceData.serviceSubText}<p>` }} />
                       

                        <a href={`service/${serviceData.slug}`} className="btn btn-black">Discover Now</a>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={serviceData.serviceListingImage.publicUrlTransformed} alt="service item image" width="100%"/>
                </div>
            </div>
        </div>
    </section> :
    <section className="services-item" key={serviceData.id}>
    <div className="container-fluid" id={serviceData.serviceWrapperId}>
        <div className="row align-items-center">
            <div className="offset-md-2 col-md-5 order-1 order-md-2">
                <div className="item-wrap">
                    <h2> {serviceData.name} </h2>
                    <div dangerouslySetInnerHTML={{__html: `<p>${serviceData.serviceSubText}<p>` }} />
                    {/* <Link href={`service/${serviceData.slug}`}> */}
                    <button className="btn btn-black" onClick={() => router.push({pathname: '/service/[slug]',query: { slug: serviceData.slug }})} > Discover Now </button>
                    {/* <a  className="btn btn-black">Discover Now</a> */}
                    {/* </Link> */}
                </div>
            </div>
            <div className="col-md-5" >
                <img src={serviceData.serviceListingImage.publicUrlTransformed} alt="service item image" width="100%"/>
            </div>
        </div>
    </div>
</section>
)}
            
        </div>
    )
}

export default ServicesOurServicesBlock
