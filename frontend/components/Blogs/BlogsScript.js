import { useEffect } from "react";

const BlogsScript = () => {

    const script = () => {
        useEffect(() => {
            $(document).ready(function() {



                        // FILTER

                         // init Isotope
    var container = $('.blog-item');
    container.isotope({
        itemSelector: '.blog-list-item',
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    // filter functions
    var filterFns = {};

    // bind filter button click
    $('.blog-catgories ul li').click(function(){
        $('.blog-catgories ul li').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        container.isotope({
            filter: filterValue
        });
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
           
          }, [])

    }


    

    
    return (
        <>
            {script()}
        </>
    )
}

export default BlogsScript

