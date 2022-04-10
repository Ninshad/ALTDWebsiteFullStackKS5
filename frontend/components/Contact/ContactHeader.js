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


const ContactHeader = () => {

    const { data, error, loading } = useQuery(CONTACT_US_QUERY, {
        variables: {
          first: limit,
        },
      });
  
      console.log(data);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <section id="contact-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="contact-mail">
                                <span>Have questions?</span>
                                {data.allContactUsPageContents.map((contactData) =>
                                <h4 key={contactData.id}>
                                <a href="#"> {contactData.haveQuestionsMailId} </a>
                                </h4>
                                )}
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact-mail">
                                <span>Join our team?</span>
                                {data.allContactUsPageContents.map((contactData) =>
                                <h4 key={contactData.id}>
                                <a href="#"> {contactData.joinOurTeamMailId} </a>
                                </h4>
                                )}
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact-mail">
                                <span>Business inquiries?</span>
                                {data.allContactUsPageContents.map((contactData) =>
                                <h4 key={contactData.id}>
                                <a href="#"> {contactData.businessInquiriesMailId} </a>
                                </h4>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>

    )
}

export default ContactHeader
