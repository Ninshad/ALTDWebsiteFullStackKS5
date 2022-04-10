// ==========================================
// ================= Navbar ================= 
// ==========================================
$(document).ready(function(){
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