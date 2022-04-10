import { useEffect } from "react";

const HomeScript = () => {

    const script = () => {
        useEffect(() => {
            $(document).ready(function() {
    
                //   Projects done/Works Done section
                    $('.work-owl-carousel').owlCarousel({
                        center: false,
                        loop:false,
                        dots:false,
                        margin:20,
                        nav:true,
                        navText: [
                            '<img src="assets/svg/right-icon-light.svg" alt="right light icon" width="28" />',
                            '<img src="assets/svg/right-icon-light.svg" alt="right light icon" width="28" />'
                        ],
                        responsive:{
                            0:{
                                items:1
                            },
                            750:{
                                items:1
                            },
                            1000:{
                                items:1
                            },
                            1430:{
                                items:2
                            }
                        }
                    });
                //   Client Logo Slider Section
                    $('.client-logo-slider').slick({
                        speed: 5000,
                        autoplay: true,
                        autoplaySpeed: 0,
                        centerMode: false,
                        cssEase: 'linear',
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        initialSlide: 1,
                        arrows: false,
                        buttons: false,
                        variableWidth: false,
                        responsive: [
                            {
                            breakpoint: 1110,
                            settings: {
                                variableWidth: true
                            }
                            }
                        ]
                    });
                    // Quote Slider/Testimonial section
                    $('.quote-owl-carousel').owlCarousel({
                        center: false,
                        loop:true,
                        dots:false,
                        nav:true,
                        navText: [
                            '<img src="assets/svg/right-icon-light.svg" alt="right light icon" width="28" />',
                            '<img src="assets/svg/right-icon-light.svg" alt="right light icon" width="28" />'
                        ],
                        autoplay:false,
                        smartSpeed: 2000, // duration of change of 1 slide
                        responsive:{
                            0:{
                                items:1
                            }
                        }
                    });
                
                    // Counter
                    $('.counter-home').counterUp({
                        delay: 10,
                        time: 3000
                    });
    
    
                        // $('.menu-toggle').click(function() {
                        //     if($('.menu').hasClass("-open")){
                        //         TweenMax.to([".menu-backdrop"], 1,{autoAlpha:0});
                        //         TweenMax.to([".menu-content"], 1,{x:'100%'});
                        //         TweenMax.to([".menu-body"], 1,{x:'100%',autoAlpha:0});
                        //         TweenMax.to([".menu-footer"], 1,{x:'100%',autoAlpha:0});
                        //     }
                        //     else {
                        //         TweenMax.to([".menu-backdrop"], 1,{autoAlpha:1});
                        //         TweenMax.to([".menu-content"], 1,{x:'0%'});
                        //         TweenMax.to([".menu-body"], 1,{x:'0%',autoAlpha:1});
                        //         TweenMax.to([".menu-footer"], 1,{x:'0%',autoAlpha:1});
                        //         $('.menu-box').css("display","block");
                        //     }
                        // });
                        // $(".menu-toggle").click(function(){
                        //     $('.menu').toggleClass("-open");
                        // });
                    
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
        <>
            {script()}
        </>
    )
}

export default HomeScript