import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import '../public/assets/css/svg-css/shape-1.css'
import '../public/assets/css/svg-css/web-dev-icon.css'
import '../public/assets/css/svg-css/works-sec-shape.css'
import '../public/assets/css/extra-css/service-sec-style.css'
import '../public/assets/css/vendors/bootstrap-grid.css'
import '../public/assets/vendor/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css'
import '../public/assets/vendor/slick-1.8.1/slick/slick.css'
import '../public/assets/css/contact.css'
import '../public/assets/css/style.css'
import '../public/assets/css/about.css'
import '../public/assets/css/blog-detail.css'
import '../public/assets/css/blog-listing.css'
import '../public/assets/css/service-detail.css'
import '../public/assets/css/service.css'
import '../public/assets/css/work-detail.css'
import '../public/assets/css/work-listing.css'
import '../public/assets/vendor/tooltipster-master/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-shadow.min.css'
import '../public/assets/vendor/tooltipster-master/dist/css/tooltipster.bundle.min.css'
import '../public/assets/vendor/tooltipster-master/dist/css/tooltipster.main.min.css'
import { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';


function MyApp({ Component, pageProps, apollo }) {

    useEffect(() => {
        AOS.init();
        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = " https://js.stripe.com/v3/";

        document.head.appendChild(aScript);
        aScript.onload = () => {

        };
    }, [])

    return (
        <ApolloProvider client={apollo}>

            <Component {...pageProps} />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>


            <script type="text/javascript" src="assets/vendor/jquery.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
            <script type="text/javascript" src="assets/vendor/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
            <script type="text/javascript" src="assets/vendor/slick-1.8.1/slick/slick.min.js"></script>
            <script type="text/javascript" src="assets/vendor/jquery.waypoints.js"></script>
            <script type="text/javascript" src="assets/vendor/jquery.counterup.js"></script>
            {/* <script type="text/javascript" src="assets/js/nav.js"></script> */}
            {/* <script type="text/javascript" src="assets/js/main.js"></script> */}
            {/* <script type="text/javascript" src="assets/js/about-page.js"></script>   */}
            <script type="text/javascript" src="assets/vendor/tooltipster-master/dist/js/tooltipster.main.min.js"></script>
            <script type="text/javascript" src="assets/vendor/tooltipster-master/dist/js/tooltipster.bundle.min.js"></script>


        </ApolloProvider>


    )
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
};

export default withData(MyApp);
