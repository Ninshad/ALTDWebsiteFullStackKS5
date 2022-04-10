import Footer from '../../components/Layouts/Footer'
import NavBar from '../../components/Layouts/NavBar'
import ServiceDetailDescription from '../../components/ServiceDetail/ServiceDetailDescription'
import ServiceDetailHeader from '../../components/ServiceDetail/ServiceDetailHeader'
import ServiceDetailQuote from '../../components/ServiceDetail/ServiceDetailQuote'
import ServiceDetailKeyTakeaway from '../../components/ServiceDetail/ServiceDetailKeyTakeaway'

const ServiceDetailPage = ({query}) => {
    return (
        <>
        <NavBar />
        <ServiceDetailHeader slug={query.slug} />
        <ServiceDetailDescription slug={query.slug} />
        <ServiceDetailQuote slug={query.slug} />
        <ServiceDetailKeyTakeaway slug={query.slug} />
        <Footer />
        </>
        
    )
}

export default ServiceDetailPage
