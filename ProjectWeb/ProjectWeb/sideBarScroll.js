$(document).ready(function () {
     //Cache selectors for faster performance.
    var $window = $(window),
        $sidebar = $('#sidebar'),
        $sidebarAnchor = $('#sidebarAnchor');
    console.log("a");

    // Run this on scroll events.
    $window.scroll(function () {
        console.log("a");
        var window_top = $window.scrollTop();
        var div_top = $sidebarAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $sidebar.addClass('stick');
            $sidebarAnchor.height($sidebar.height());
        }
        else {
            // Unstick the div.
            $sidebar.removeClass('stick');
            $sidebarAnchor.height(0);
        }
    });
    
});