import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"
import ServiceScriptBlock from "../../components/Services/ServiceScriptBlock"
import ServicesHeaderBlock from "../../components/Services/ServicesHeaderBlock"
import ServicesOurServicesBlock from "../../components/Services/ServicesOurServicesBlock"
import ServicesOurServicesCards from "../../components/Services/ServicesOurServicesCards"

const services = () => {
    return (
        <>
        <NavBar />
        <ServicesHeaderBlock />
        <ServicesOurServicesCards/>
        <ServicesOurServicesBlock />
        {/* <ServiceScriptBlock/> */}
        <Footer />
        </>
        
    )
}

export default services
