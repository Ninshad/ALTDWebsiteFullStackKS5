import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { Alert, Spinner } from "react-bootstrap";


export const HOME_HEADER_QUERY = gql`
query HOME_HEADER_QUERY {
    
    allHomePageContents{
        id
        name
        Counter{
          id
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
        aboutUsContent{
          id
          name
          contentBlockTitle
          contentBlockSubTitle
          content
        }
        showReadMoreButton
        ReadMoreButtonLabel
        ReadMoreButtonUrl
              
      }
}`



const HomeAboutUsBlock = () => {

    const { data, error, loading } = useQuery(HOME_HEADER_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>

    return (

        <>
        {data.allHomePageContents.map((allHomePageDatas) =>
                
                
        <section id="about" key={allHomePageDatas.id}>
        <div className="container">
            <div className="row align-items-center">
            {allHomePageDatas.Counter.map((counterDatas) =>
                <div className="col-md-6" key={counterDatas.id}>
                    <div className="d-flex align-items-end">
                        <div className="img-wrap default-background"></div>
                        <div className="count-item mr-0 text-center d-flex align-items-center justify-content-center flex-column">
                            <h2>
                                <span className="counter-home"> {counterDatas.counter1Till} </span>
                            </h2>
                            <hr/>
                            <p>{counterDatas.counter1Label}</p>
                        </div>
                    </div>
                    <div className="-left d-flex align-items-start">
                        <div className="count-item text-center d-flex align-items-center justify-content-center flex-column">
                            <h2>
                                <span className="counter-home">{counterDatas.counter2Till}</span></h2>
                            <hr/>
                            <p>{counterDatas.counter2Label}</p>
                        </div>
                        <div className="count-item-last text-center d-flex align-items-center justify-content-center flex-column">
                            <h2>
                                <span className="counter-home">{counterDatas.counter3Till}</span></h2>
                            <hr/>
                            <p>{counterDatas.counter3Label}</p>
                        </div>
                    </div>
                </div>
                )}
                
                {allHomePageDatas.aboutUsContent.map((aboutUsDatas) =>
                <div className="col-md-6" key={aboutUsDatas.id}>
                    <div className="-content-wrap">
                        <h3 className="text-uppercase"> {aboutUsDatas.contentBlockTitle} </h3>
                        <h2>{aboutUsDatas.contentBlockSubTitle}<span className="primary-font">.</span></h2>
                        <div dangerouslySetInnerHTML={{__html: `<p>${aboutUsDatas.content}<p>` }} />
                        <div >
                        <Link href={`/${allHomePageDatas.ReadMoreButtonUrl}`}>
                         <button className="btn btn-black"> {allHomePageDatas.ReadMoreButtonLabel} </button>
                        </Link>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </section>
            
    )}

    {/* <script type="text/javascript" src="assets/js/nav.js"></script>
    <script type="text/javascript" src="assets/js/main.js"></script> */}
    
        </>
        
    
    )
}

export default HomeAboutUsBlock
