import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { Alert, Spinner } from "react-bootstrap";


export const HOME_HEADER_QUERY = gql`
query HOME_HEADER_QUERY {
    
    allHomePageContents{
        id
        name
        servicesContent{
          id
          contentBlockTitle
          contentBlockSubTitle
          content
        }
        ourService{
            id
            name
            serviceImage{
              publicUrlTransformed
            }
            serviceHoverImage{
              publicUrlTransformed
            }
            title
            description
          }
      }
}`


const HomeOurServicesBlock = () => {
    const { data, error, loading } = useQuery(HOME_HEADER_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>
    
    return (
        <>
        {data.allHomePageContents.map((allHomePageDatas) =>
        <section id="service" key={allHomePageDatas.id}>
        <div className="container-fluid">
            <div className="row">
                {allHomePageDatas.servicesContent.map((serviceContentData) =>
                <div className="col-xl-5 col-lg-4 px-0 default-background service-col-bg" key={serviceContentData.id}>
                    <div className="img-holder d-flex align-items-center justify-content-center">
                        <div className="service-title-content-wrap">
                            <h3 className="text-uppercase">{serviceContentData.contentBlockTitle}</h3>
                            <h2>{serviceContentData.contentBlockSubTitle}<span className="primary-font">.</span></h2>
                            <div dangerouslySetInnerHTML={{__html: `<p>${serviceContentData.content}<p>` }} />
                        </div>
                    </div>
                </div>
                )}

                
                <div className="col-xl-7 col-lg-8">
                    <div className="row">
                    {allHomePageDatas.ourService.map((ourServiceData) =>
                        <div className="col-lg-6 col-md-6 px-0" key={ourServiceData.id}>
                            <div className="service-item-wrap">
                                <div className="service-item d-flex align-items-center justify-content-start flex-column">
                                    <div className="item-icon">
                                        <img className="off-hover" src={ourServiceData.serviceImage.publicUrlTransformed} alt="web icon" /> 
                                        <img className="on-hover" src={ourServiceData.serviceHoverImage.publicUrlTransformed} alt="web icon" /> 
                                    </div>
                                    <div className="item-back-icon">
                                        <img src={ourServiceData.serviceHoverImage.publicUrlTransformed} alt="web icon" width="100%" /> 
                                    </div>
                                    <div className="item-title text-center"> {ourServiceData.title} </div>
                                    <hr />
                                    <div className="item-para text-center"> {ourServiceData.description} </div>
                                </div>
                            </div>
                        </div>
                        )}
                        <div className="col-lg-6 col-md-6 px-0">
                            <div className="service-item-wrap-last d-flex align-items-center justify-content-center">
                                <div className="service-item-last">
                                    <div className="item-title-last">Check out our services</div>
                                    <hr className="hr-last" />
                                    <div className="d-flex align-items-center justify-content-end">
                                        <div className="view-more">
                                    <Link className="view-more" href="/services">
                                            <img src="assets/svg/right-icon-light.svg" alt="right light icon" width="28" />
                                    </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        )}
</>
    )
}

export default HomeOurServicesBlock
