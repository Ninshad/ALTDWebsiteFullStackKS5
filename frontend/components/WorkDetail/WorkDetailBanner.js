const WorkDetailBanner = () => {
    return (
        <>
            <section id="work-hero">
                <div className="container work-descr-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="work-logo">
                                {/* <a href="#" target="_blank"><img src="images/clients/hook-agency-logo.png" alt="client logo" width="100%" /></a> */}
                                <a href="#" target="_blank"><img src="assets/images/clients/hook-agency-logo.png" alt="client logo" width="100%" style={{ fontSize: "45px" }} /></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="work-desc">
                                <h3>Web Development - Wordpress</h3>
                                <h2>Lorem ipsum dolor sit amet consectetur elit. In, quae enim! Ratione doloremque temporibus.</h2>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="work-detail-images">
                                <img src="assets/images/Works-detail/Work-image/cover-1-copy.jpg" alt="work-cover" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <script type="text/javascript" src="assets/vendor/jquery.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
            <script type="text/javascript" src="assets/js/nav.js"></script> */}
        </>
    )
}

export default WorkDetailBanner
