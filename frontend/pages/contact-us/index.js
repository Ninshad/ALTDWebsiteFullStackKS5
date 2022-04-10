import ContactContactBlock from "../../components/Contact/ContactContactBlock"
import ContactHeader from "../../components/Contact/ContactHeader"
import ContactLocationBlock from "../../components/Contact/ContactLocationBlock"
import ContactScriptBlock from "../../components/Contact/ContactScript"
import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"


const index = () => {
    return (
        <>
        <NavBar />
        <ContactHeader />
        <ContactContactBlock />
        <ContactLocationBlock />
        {/* <ContactScriptBlock/> */}
        <Footer />
        </>
    )
        
        
}

export default index
