import AboutScriptBlock from "../../components/AboutUs/AboutScriptBlock"
import AboutUsDiscriptionBlock from "../../components/AboutUs/AboutUsDiscriptionBlock"
import AboutUsHeaderBlock from "../../components/AboutUs/AboutUsHeaderBlock"
import AboutUsOurProcessBlock from "../../components/AboutUs/AboutUsOurProcessBlock"
import AboutUsScript from "../../components/AboutUs/AboutUsScript"
import AboutUsTeamBlock from "../../components/AboutUs/AboutUsTeamBlock"
import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"

const index = () => {
    return (
        <>
        <NavBar/>
        <AboutUsHeaderBlock/>
        <AboutUsDiscriptionBlock/>
        <AboutUsOurProcessBlock/>
        <AboutUsTeamBlock/>
        <AboutScriptBlock/>
        <AboutUsScript/>
        <Footer/>
        </>
        
    )
}

export default index
