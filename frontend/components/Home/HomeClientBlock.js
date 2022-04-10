import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Alert, Spinner } from "react-bootstrap";


export const HOME_CONTENT_QUERY = gql`
query HOME_CONTENT_QUERY {
    
    allHomePageContents{
	id
    name
    clientLogo{
      id
      name
      clientLogo{
        publicUrlTransformed
      }
    }
  }
}`


const HomeClientBlock = () => {

    const { data, error, loading } = useQuery(HOME_CONTENT_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>


    return (
         <>
            <section id="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-uppercase text-center">trusted by</h3>
                            <h4 className="text-center">We are blessed to work with leading brands and companies</h4>
                        </div>
                        <div className="col-md-12">
                        
                            <div className="client-logo-slider">
                            {data.allHomePageContents.map((allHomePageData) =>
                            allHomePageData.clientLogo.map((clientLogoData) =>
                                <div key={clientLogoData.id}>
                                    <img src={clientLogoData.clientLogo.publicUrlTransformed} alt="client hook agency"/>
                                </div>
                            )
                            )}
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
         </>
        
    )
}

export default HomeClientBlock
