sb.app.controller('SiteBuilderCtrl', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {

        // fix Bootstrap fixed-top and fixed-bottom from jumping around on mobile input when virtual keyboard appears
        if ($(window).width() < 960) {
            $(document)
                .on('focus', ':input:not("button")', function (e) {
                    $('.navbar-fixed-bottom, .headroom.navbar-fixed-top').css("position", "relative");
                })
                .on('blur', ':input', function (e) {
                    $('.navbar-fixed-bottom, .headroom.navbar-fixed-top').css("position", "fixed");
                });
        }


}]);