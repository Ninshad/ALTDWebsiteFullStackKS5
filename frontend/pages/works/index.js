import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"
import WorkHeaderBlock from "../../components/Work/WorkHeaderBlock"
import WorkListBlock from "../../components/Work/WorkListBlock"

const index = () => {
    return (
        <>
        <NavBar />
        <WorkHeaderBlock />
        <WorkListBlock />
        <Footer />
        </>
    )
}

export default index
