import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Alert, Spinner } from "react-bootstrap";


export const HEADER_QUERY = gql`
query HEADER_QUERY {
    
    allHeaders{
	id
    name
    page
    title
    subTitle
    headerImage{
        id
      image{
        publicUrlTransformed
      }
    }
  }
}`



const ServicesHeaderBlock = () => {

    const { data, error, loading } = useQuery(HEADER_QUERY);
    console.log(data);
    if (loading) return <Spinner animation="border" style={{color:"#E86124"}} />
    if (error) return <p></p>

    return (
        <>
        {data.allHeaders.map((headerData) =>
            <section id="service-hero"  key={headerData.id}>
                <div className="container-fluid">
                    <div className="row">
                        <div className=" col-lg-6">
                            <div className="h1-wrap" >
                                {headerData.page == "Service" && 
                                <>
                                <div id="headerText">
                                    <div className="headerTitle">
                                        <h3 className="text-uppercase">{headerData.title}</h3>
                                    </div>
                                    <div className="headerSubTitle">
                                        <h1 >{headerData.subTitle}<span className="primary-font">.</span></h1>
                                    </div>
                                </div>
                                
                                </>
                            }
                            </div>
                        </div>
                        
                        {headerData.headerImage.map((imageData) =>
                        <div className="col-lg-6" key={imageData.id}>
                            <div id="headerImage">
                        {headerData.page == "Service" &&
                        <img  src={imageData.image.publicUrlTransformed} />
                        }
                          </div>
                        </div>
                        ) }
                    </div>
                   
                                    
                </div>
            </section>
            )}
        </>
    )
}

export default ServicesHeaderBlock
