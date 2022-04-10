import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Alert, Spinner } from "react-bootstrap";


export const HOME_CONTENT_QUERY = gql`
query HOME_CONTENT_QUERY {
    
    allHomePageContents{
	id
    name
    Testimonial{
      id
      name
      clientName
      companyName
      testimonial
    }
  }
}`


const HomeQuotesBlock = () => {

    const { data, error, loading } = useQuery(HOME_CONTENT_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>

    return (
        <>
        <section id="quote">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-7 mx-auto">
                    <div className="quote-wrapper">
                        <h2>What Our Client Say<span className="primary-font">,</span></h2>
                        <div className="quote-owl-carousel owl-carousel">
                            {data.allHomePageContents.map((allHomePageData) =>
                            allHomePageData.Testimonial.map((testimonialData) =>
                            <div className="quote-item-wrap" key={testimonialData.id}>
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <div className="client-details">
                                            <div className="intro">I'am</div>
                                            <div className="-name"> {testimonialData.clientName} </div>
                                            <div className="-firm"> {testimonialData.companyName} </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="quote-content" dangerouslySetInnerHTML={{ __html: `<p>${testimonialData.testimonial}<p>` }} />
                                    </div>
                                </div>
                            </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
        
    )
}

export default HomeQuotesBlock
