import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"
import ExtraWorkSceenShot from "../../components/WorkDetail/ExtraWorkSceenShot"
import ExtraWorkScreenShotCover from "../../components/WorkDetail/ExtraWorkScreenShotCover"
import ResponsiveWorkScreenShot from "../../components/WorkDetail/ResponsiveWorkScreenShot"
import WorkDetailBanner from "../../components/WorkDetail/WorkDetailBanner"
import WorkDetailContentWrapper from "../../components/WorkDetail/WorkDetailContentWrapper"
import WorkDetailDescription from "../../components/WorkDetail/WorkDetailDescription"
import WorkScreenShot from "../../components/WorkDetail/WorkScreenShot"
import WorkScreenShotCover from "../../components/WorkDetail/WorkScreenShotCover"
import WorkTestimonialBlock from "../../components/WorkDetail/WorkTestimonialBlock"

const WorkDetailPage = ({query}) => {
    return (
        <>
        <NavBar />
        <WorkDetailBanner/>
        <WorkDetailDescription/>
        <WorkScreenShotCover/>
        <WorkScreenShot/>
        <WorkDetailContentWrapper/>
        <ExtraWorkSceenShot/>
        <ExtraWorkScreenShotCover/>
        <ResponsiveWorkScreenShot/>
        <WorkTestimonialBlock/>
        <Footer />
        </>
    )
}

export default WorkDetailPage
