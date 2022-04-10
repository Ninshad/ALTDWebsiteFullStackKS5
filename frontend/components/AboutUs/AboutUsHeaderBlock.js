import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { Alert, Spinner } from "react-bootstrap";


export const ABOUT_US_HEADER_QUERY = gql`
query ABOUT_US_HEADER_QUERY {
    
    allAboutUsPageContents{
        id
        name
        header{
                id
          name
          title
          subTitle
          showCta
          CtaLabel
          CtaUrl
          headerImage{
            id
            image{
              publicUrlTransformed
            }
          }
        }
      }
}`



const AboutUsHeaderBlock = () => {

    const { data, error, loading } = useQuery(ABOUT_US_HEADER_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>


    return (
        <>
            {data.allAboutUsPageContents.map((allAboutUsDatas) =>
                allAboutUsDatas.header.map((headerDatas) =>
                    <section id="about-hero" key={headerDatas.id}>
                        <>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10 mx-auto text-center hero-content-wrap">
                                        <h1 style={{ marginTop: "280px", marginBottom:"0px" }}> {headerDatas.title} </h1>
                                        <p> {headerDatas.subTitle} </p>
                                        <Link href={`/${headerDatas.CtaUrl}`}>
                                        <button className="button button--cta"><span> {headerDatas.CtaLabel} </span></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="headerImage1" >
                                        <img src={headerDatas.headerImage[1].image.publicUrlTransformed} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="headerImage2" >
                                        <img src={headerDatas.headerImage[0].image.publicUrlTransformed} />
                                    </div>
                                </div>
                            </div>
                        </>
                    </section>
                )
            )}
        </>
    )
}

export default AboutUsHeaderBlock
