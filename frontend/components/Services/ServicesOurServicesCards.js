// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/fontawesome-free-solid'
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Alert, Button, Spinner } from "react-bootstrap";
// import RoomIcon from '@material-ui/icons/ChevronLeftRounded';


export const SERVICE_CARD_QUERY = gql`
query SERVICE_CARD_QUERY {
    
    allServiceCards{
        id
        name
    	serviceImage{
          id
          publicUrlTransformed
        }
    	readMoreLink
  }
}`




const ServicesOurServicesCards = () => {

    const { data, error, loading } = useQuery(SERVICE_CARD_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>


    return (
        <>
            <section className="section-parallax-block parallax background-hero-post-service">
                <div className="container">
                    <div className="parallax_head">
                        <h2 data-aos="fade-up" data-aos-once="false">Our Services<span className="primary-font">.</span></h2>
                    </div>
                    <div className="prallax_wrap">
                        <div className="row">

                            {data.allServiceCards.map((serviceCardData) =>
                                <div className="col-6 col-sm-6 col-md-4" key={serviceCardData.id}>
                                    <div className="service_wrapper" data-aos="fade-up" data-aos-duration="1500">
                                        <div className="service_wrap">
                                            <div className="apps_icon">
                                                <a href={`#${serviceCardData.readMoreLink}`} className="wrap-col-1">
                                                    <img key={serviceCardData.serviceImage.id} src={serviceCardData.serviceImage.publicUrlTransformed} alt="web aplication development" />
                                                    <p> {serviceCardData.name} </p>
                                                    {/* <span className="arrow_box"><i className="fa fa-chevron-down" aria-hidden="true"></i></span> */}
                                                    <span className="arrow_box"><i className="fa fa-chevron-down" aria-hidden="true">
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>

                                                        {/* <RoomIcon /> */}

                                                    </i></span>


                                                </a>
                                                {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesOurServicesCards
