import Menu from "./Menu"
import Link from 'next/link';
import { useEffect } from "react";

const NavBar = () => {

    const script = () => {
        useEffect(() => {
            $(document).ready(function() {
        
               
        
                        $('.menu-toggle').click(function() {
                            if($('.menu').hasClass("-open")){
                                TweenMax.to([".menu-backdrop"], 1,{autoAlpha:0});
                                TweenMax.to([".menu-content"], 1,{x:'100%'});
                                TweenMax.to([".menu-body"], 1,{x:'100%',autoAlpha:0});
                                TweenMax.to([".menu-footer"], 1,{x:'100%',autoAlpha:0});
                            }
                            else {
                                TweenMax.to([".menu-backdrop"], 1,{autoAlpha:1});
                                TweenMax.to([".menu-content"], 1,{x:'0%'});
                                TweenMax.to([".menu-body"], 1,{x:'0%',autoAlpha:1});
                                TweenMax.to([".menu-footer"], 1,{x:'0%',autoAlpha:1});
                                $('.menu-box').css("display","block");
                            }
                        });
                        $(".menu-toggle").click(function(){
                            $('.menu').toggleClass("-open");
                        });
                    
                });
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 30) {
                        return document.querySelector('.menu').classList.add('active')
                    }
                    return document.querySelector('.menu').classList.remove('active')
                });
           
          }, [])

    }

    return (
        <nav className="menu" style={{ position: "relative" }}>
            <Link href="/">
                <div className="nav-bg">
                    <div className="menu-logo">
                        <img src="assets/svg/altd-logo.svg" alt="logo" width="100%" height="100%" />
                    </div>
                </div>
            </Link>
            {script()}
            <Menu />
        </nav>
    )
}

export default NavBar
