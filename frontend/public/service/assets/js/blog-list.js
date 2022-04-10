      
// 
// 
// 
// ==========================================
// ============ Blog List Page ============== 
// ==========================================
$(document).ready(function() {
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
    //****************************
    // Isotope Load more button
    //****************************
    var initShow = 4; //number of images loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = container.data('isotope'); // get Isotope instance

    loadMore(initShow); //execute function onload

    function loadMore(toShow) {
        container.find(".hidden").removeClass("hidden");
        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            $("#load-more").hide();
        } 
        else {
            $("#load-more").show();
        };
    }

    //append load more button
    container.after('<div class="viewPlan text-center"><a href="#" id="load-more">Load More</a></div>');
    
    //when load more button clicked
    $(document).on("click", "#load-more", function(e) {
        e.preventDefault();
        
        if ($('#filters').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            $('#filters').data('clicked', false);
        } else {
            counter = counter;
        };
        
        counter = counter + initShow;
        
        loadMore(counter);
    });
    //when filter button clicked
    $("#filters").click(function() {
        $(this).data('clicked', true);

        loadMore(initShow);
    });
});