import { useState } from "react";
import UserTemplate from "../../emails/new-user"
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";


const CREATE_CONTACT_US_FORM_MUTATION = gql`
mutation CREATE_CONTACT_US_FORM_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $email: String!
    $message: String!
  ) {
    createContactUsForm(
      data: {
        name: $name
        email: $email
        message: $message
      }
    ) {
        id
        name
        message
    }
  }
`;


const ContactContactBlock = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showNameErrorMessage, setShowNameErrorMessage] = useState(false);
    const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
    const [showMessageErrorMessage, setShowMessageErrorMessage] = useState(false);

    const [createContactUsForm, { loading, error, data }] = useMutation(
        CREATE_CONTACT_US_FORM_MUTATION,
        
      );

      function resetForm() {
        setName("");
        setEmail("");
        setMessage("");
      }

      function responseMessage(){
          if(data){
              return(
                  <div style={{backgroundColor:"green", color:"white", marginTop:"10px", padding:"1px", textAlign:"center"}}>
                      <p style={{marginTop:"10px"}} >Thank you for your message. It has been sent.</p>
                  </div>
                  
              )
          }
      }

    const errorMessage = () => {
          return(
              <div>
                  <p style={{color:"red"}}>This field is required.</p>
              </div>
          )
      }
    const nameRequired = (e) => {
        e.preventDefault();
          setShowNameErrorMessage(true)
      }
    const emailRequired = (e) => {
        e.preventDefault();
        setShowEmailErrorMessage(true)
    }
    const messageRequired = (e) => {
        e.preventDefault();
        setShowMessageErrorMessage(true)
    }

    const formSubmtion = async(e) => {
        e.preventDefault();
          // Submit the inputfields to the backend:
            const res = await createContactUsForm({
                variables: {
                  name: name,
                  email: email,
                  message: message,
                },
              }).catch(console.error);
            console.log(res);
            resetForm()
          
      }

    return (
        <section id="form-sec">
        <div className="container">
            <div className="contactContactBody" > 
            <div className="row">
                <div className="col-md-6">
                    <h3>HOW WE CAN HELP YOU</h3>
                    <div className="form-title">Let us help you get your project started<span className="primary-font">.</span></div>
                </div>
                <div className="col-md-6">
                    <div className="form-subtitle">Hello, Tell us about your project</div>


                    <form 
                    className="form"
                    >
                        <p>
                            <label>
                                <span className="form-control-wrap first-name">
                                    <input type="text" name="first-name" value={name} onChange={(e)=>setName(e.target.value)}  size="40" className="" aria-required="true" aria-invalid="false" placeholder="Name" />
                                </span>
                                {showNameErrorMessage? errorMessage() : null }
                            </label>
                            <label>
                                <span className="form-control-wrap first-name">
                                    <input type="email" name="your-email" value={email} onChange={(e)=>setEmail(e.target.value)} size="40" className="" aria-required="true" aria-invalid="false" placeholder="Email" />
                                </span>
                                {showEmailErrorMessage? errorMessage() : null }
                            </label>
                            <label>
                                <span className="form-control-wrap first-name">
                                    <textarea name="your-message" value={message} onChange={(e)=>setMessage(e.target.value)} cols="40" rows="10" className="" aria-invalid="false" placeholder="Message"></textarea>
                                </span>
                                {showMessageErrorMessage? errorMessage() : null }
                            </label>
                        </p>
                        <p>
                            <span className="list-item">
                                <label>
                                    <input type="checkbox" name="your-consent" value="1" aria-invalid="false" />
                                    <span className="list-item-label">I understand that ALT-D Technologies will securely hold my data in accordance with their <a href="#">Privacy Policy</a></span>
                                </label>
                            </span>
                            <button className="submitButton" onClick={!name? nameRequired: !email? emailRequired: !message? messageRequired : formSubmtion }>Submit</button>
                            {responseMessage()}
                        </p>
                    </form>
                </div>
            </div>

            </div>
            
        </div>
    </section>
    )
}

export default ContactContactBlock
