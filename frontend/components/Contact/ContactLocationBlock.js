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


const ContactLocationBlock = () => {

    const { data, error, loading } = useQuery(CONTACT_US_QUERY, {
        variables: {
            first: limit,
        },
    });

    console.log(data);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <section id="section-contact-info">
            <div className="container">
                <div className="contactLocationBody">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="contact-info-wrap">
                                <h3>ALT-D Technologies LLP - India</h3>
                                {data.allContactUsPageContents.map((contactData) =>
                                    <div key={contactData.id} style={{ width: "42%" }}>
                                        <div dangerouslySetInnerHTML={{ __html: `<p>${contactData.address}<p>` }} />
                                    </div>
                                )}
                                <a className="btn btn-black" href="#" target="_blank">GET DIRECTIONS</a>
                                <div className="call-detail">
                                    <span className="d-block" >Call us at</span>
                                    {data.allContactUsPageContents.map((contactData) =>
                                        <a className="d-block" herf="#" key={contactData.id}> {contactData.contactNumber1} </a>
                                    )}
                                    {data.allContactUsPageContents.map((contactData) =>
                                        <a className="d-block" herf="#" key={contactData.id}> {contactData.contactNumber2} </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="direction-map">
                                <a href="https://goo.gl/maps/EdnJYRKyi5ZG1NPr8" target="_blank"><img src="assets/images/Contact/location-map.png" alt="Direction map" width="100%" /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ContactLocationBlock
