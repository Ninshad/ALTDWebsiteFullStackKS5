import Link from 'next/link';

const Menu = () => {
   
    return (
        <>
            <div className="menu-toggle link">
                <button className="al-btn btn_menu" aria-label="menu">
                    <span className="btn_menu-title" >menu</span>
                    <span className="btn_menu-box" >
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>
            <div className="menu-box">
                <div className="menu-backdrop" ></div>
                <div className="menu-content">
                    <div className="menu-body">
                        <div className="menu-container">
                            <div className="menu-grid">
                                <div className="menu-grid-col -left">
                                    <div className="menu-title">Social</div>
                                    <div className="menu-social">
                                        <a href="https://www.facebook.com/altdtech" className="menu-social-item link" target="_blank">
                                            <em>
                                                <span data-text="Facebook">Facebook</span>
                                            </em>
                                        </a>
                                        <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQE365mhiqJzqgAAAX9kHTyAhDLyNoQ09vmY2xNd_cdXUmfDxts9vtzFFM1_D4xw-bJ8lbBGY85PeQvVJQ71ZIhtRa2S87TBpgu7HKzIBGQtLq0hw6CX9VDCdCl2OUgyZJxnXnM=&originalReferer=https://www.altd.in/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Falt-d-technologies-llp%2F" className="menu-social-item link">
                                            <em>
                                                <span data-text="LinkedIn">LinkedIn</span>
                                            </em>
                                        </a>
                                    </div>
                                </div>
                                <div className="menu-grid-col -right">
                                    <div className="menu-title">Menu</div>
                                    <div className="menu-nav">
                                        <div className="menu-nav-item link">
                                            <Link href="/">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="Home">Home</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="menu-nav-item link">
                                            <Link href="/about-us">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="About Us">About Us</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="menu-nav-item link">
                                            <Link href="/services">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="Services">Services</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="menu-nav-item link">
                                            <Link href="/works">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="Works">Works</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="menu-nav-item link">
                                            <Link href="/blogs">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="Blog">Blog</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="menu-nav-item link">
                                            <Link href="/contact-us">
                                                <div className='menuLink'>
                                                    <em>
                                                        <span data-text="Contact">Contact</span>
                                                    </em>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-footer">
                        <div className="menu-container">
                            <div className="menu-title">Get in touch</div>
                            <div className="menu-mail">
                                <a href="#">
                                    <span>info@altd.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Menu
