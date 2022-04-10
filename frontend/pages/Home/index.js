import HomeAboutUsBlock from "../../components/Home/HomeAboutUsBlock"
import HomeClientBlock from "../../components/Home/HomeClientBlock"
import HomeHeaderBlock from "../../components/Home/HomeHeaderBlock"
import HomeOurServicesBlock from "../../components/Home/HomeOurServicesBlock"
import HomeOurWorksBlock from "../../components/Home/HomeOurWorksBlock"
import HomeQuotesBlock from "../../components/Home/HomeQuotesBlock"
import HomeScript from "../../components/Home/HomeScript"
import HomeScriptsBlock from "../../components/Home/HomeScriptsBlock"
import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"

const index = () => {
    return (
        <>
        <NavBar/>
        <HomeHeaderBlock/>
        <HomeAboutUsBlock/>
        <HomeOurServicesBlock/>
        <HomeOurWorksBlock/>
        <HomeClientBlock/>        
        <HomeQuotesBlock/>
        <HomeScriptsBlock/>
        <HomeScript/>
        <Footer/>
        </>
    )
}

export default index
