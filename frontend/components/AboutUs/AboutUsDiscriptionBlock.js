import { useQuery } from "@apollo/client";
import gql from "graphql-tag"
import { Spinner } from "react-bootstrap";

export const ABOUT_US_DESCRIPTION_QUERY = gql`
query ABOUT_US_DESCRIPTION_QUERY {
    
    allAboutUsPageContents{
        id
        name
        Counter{
          name
          counter1Till
          counter1Suffix
          counter1Label
          counter2Till
          counter2Suffix
           counter2Label
          counter3Till
          counter3Suffix
          counter3Label
        }
        descriptionContent{
            contentBlockTitle
            contentBlockSubTitle
            content
        }
    
    }
    
}`




const AboutUsDiscriptionBlock = () => {


    const { data, error, loading } = useQuery(ABOUT_US_DESCRIPTION_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>

    return (
        <>

            {data.allAboutUsPageContents.map((aboutData) =>
                aboutData.Counter.map((counterDatas) =>
                    aboutData.descriptionContent.map((discriptionData) =>
                        <section id="about-us" key={aboutData.id}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="about-title-content-wrap">
                                            <>
                                                <h3 className="text-uppercase"> {discriptionData.contentBlockTitle} </h3>
                                                <h2>{discriptionData.contentBlockSubTitle} <span className="primary-font">.</span></h2>
                                            </>
                                            <div className="growth-statics d-flex align-items-center">
                                                <div className="count-item text-center">
                                                    <h4>
                                                        <span className="counter-about"> {counterDatas.counter1Till} </span>
                                                    </h4>
                                                    <h6> {counterDatas.counter1Label} </h6>
                                                </div>
                                                <div className="count-item text-center">
                                                    <h4>
                                                        <span className="counter-about">{counterDatas.counter2Till}</span><span>{counterDatas.counter2Suffix}</span>
                                                    </h4>
                                                    <h6> {counterDatas.counter2Label} </h6>
                                                </div>
                                                <div className="count-item text-center">
                                                    <h4>
                                                        <span className="counter-about">{counterDatas.counter3Till}</span><span>{counterDatas.counter3Suffix}</span>
                                                    </h4>
                                                    <h6> {counterDatas.counter3Label} </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 about-content-wrap ">
                                        <div dangerouslySetInnerHTML={{ __html: `<p>${discriptionData.content}<p>` }} />

                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                )
            )}
        </>
    )
}

export default AboutUsDiscriptionBlock
