import Link from 'next/link';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { limit } from "../../config";

export const CONTACT_US_QUERY = gql`
query CONTACT_US_QUERY($first: Int) {
    allContactUsPageContents(first: $first) {
        id
        haveQuestionsMailId
        joinOurTeamMailId
        businessInquiriesMailId
        address
        contactNumber1
        contactNumber2
      }
}`

const Footer = () => {

    const { data, error, loading } = useQuery(CONTACT_US_QUERY, {
        variables: {
          first: limit,
        },
      });
  
      console.log(data);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <footer className="Footer">
            {data.allContactUsPageContents.map((contactData) =>

            <div className="Footer-wrapper" key={contactData.id}>
                <div className="Footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="Footer-contacts">
                                    <span>Let’s talk</span><span className="primary-font">.</span>
                                </div>
                                <div className="Footer-email">
                                {/* {data.allContactUsPageContents.map((contactData) => */}
                                <a href="mailto:info@altd.in"> {contactData.haveQuestionsMailId} </a>
                                {/* )} */}
                                </div>
                            </div>
                            <div className="offset-md-1 col-md-6">
                                <div className="map-wrap">
                                    <a href="https://goo.gl/maps/Z8USi44AGeqP2c3a9" target="_blank"><img src="assets/images/Footer/google-map-1.jpg" alt="google map" width="100%" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="Footer-address"><span>ALT-D Technologies LLP</span>
                                {/* {data.allContactUsPageContents.map((contactData) => */}
                                    <div>
                                        <span><div dangerouslySetInnerHTML={{ __html: `<p>${contactData.address}<p>` }} /></span> 
                                        
                                    </div>
                                {/* )} */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" style={{marginLeft:"-30px"}}>
                                <div className="Footer-links">
                                    <ul>
                                        {/* <li className="menu-nav-item"><a href="#"><em><span data-text="About Us">About Us</span></em></a></li> */}
                                        <li className="menu-nav-footer">
                                            <Link href="/about-us">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="About Us">About Us</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="menu-nav-footer">
                                            <Link href="/works">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="Works">Works</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="menu-nav-footer">
                                            <Link href="/services">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="Services">Services</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="Footer-links">
                                    <ul>
                                        <li className="menu-social-item"><a href="https://www.facebook.com/altdtech" target="_blank"><em><span data-text="Facebook">Facebook</span></em></a></li>
                                        <li className="menu-social-item"><a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQE365mhiqJzqgAAAX9kHTyAhDLyNoQ09vmY2xNd_cdXUmfDxts9vtzFFM1_D4xw-bJ8lbBGY85PeQvVJQ71ZIhtRa2S87TBpgu7HKzIBGQtLq0hw6CX9VDCdCl2OUgyZJxnXnM=&originalReferer=https://www.altd.in/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Falt-d-technologies-llp%2F" target="_blank"><em><span data-text="LinkedIn">LinkedIn</span></em></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            <div className="copyright">&copy; <span>{(new Date().getFullYear())}</span> All Rights Reserved by ALT-D Technologies LLP</div>


        </footer>
    )
}

export default Footer
