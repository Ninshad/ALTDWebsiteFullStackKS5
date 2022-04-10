import { useQuery } from "@apollo/client";
import gql from "graphql-tag"
import { Spinner } from "react-bootstrap";

export const ABOUT_US_OUR_PROCESS_QUERY = gql`
query ABOUT_US_OUR_PROCESS_QUERY {
    
    allAboutUsPageContents{
        id
        name
        processContent{
          id
          name
          contentBlockTitle
          contentBlockSubTitle
          content
        }
        process{
          id
          name
          processWrapperId
          processContent
          processImage{
            id
            publicUrlTransformed
          }
        }
      }
    
}`

const AboutUsOurProcessBlock = () => {

    const { data, error, loading } = useQuery(ABOUT_US_OUR_PROCESS_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>


    return (
        <>
            {data.allAboutUsPageContents.map((processDatas) =>
                processDatas.processContent.map((processContentData) =>
                    <div className="process-title-wrap" key={processContentData.id}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9" key={processContentData.id}>
                                    <h3 className="text-uppercase" >{processContentData.contentBlockTitle}</h3>
                                    <h2 >{processContentData.contentBlockSubTitle} <span className="primary-font">.</span></h2>
                                    <div dangerouslySetInnerHTML={{ __html: `<p>${processContentData.content}<p>` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
                
                    <section id="process">
                    {data.allAboutUsPageContents.map((processDatas) =>
                        <div className="container" key={processDatas.id}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="process-content-wrap mx-auto" >
                                {processDatas.process.map((processData) =>
                                    

                                        <div key={processData.processWrapperId} id={processData.processWrapperId} className={`process-wrap ${processData.processWrapperId}`}>
                                            
                                            <h4 >{processData.name}</h4>
                                            <div dangerouslySetInnerHTML={{ __html: `<p>${processData.processContent}<p>` }} />

                                            <div key={processData.id} className={`process-img ${processData.processWrapperId} d-md-none d-block`}>
                                                <img key={processData.id} src={processData.processImage.publicUrlTransformed} alt="process-1" width="100%" />
                                            </div>
                                        </div>
                                    
                                )}
                                </div>
                                </div>
                                <div className="col-md-6 d-md-block d-none" >
                                {processDatas.process.map((processData) =>
                                    <div className="process-images-wrap" key={processData.id}>
                                        <div className={`process-img justify-content-center align-items-center ${processData.processWrapperId}`}><img key={processData.processImage.id} src={processData.processImage.publicUrlTransformed} alt={processData.processWrapperId} width="100%" /></div>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                        )}
                    </section>
        </>
    )
}

export default AboutUsOurProcessBlock
