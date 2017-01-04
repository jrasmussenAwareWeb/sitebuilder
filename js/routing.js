sb.app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);


    $routeProvider.
    when('/sitebuilder/componentList', { templateUrl: '/sitebuilder/partials/componentListView.html', controller: 'ComponentListCtrl'  }).
    when('/sitebuilder/components/accordion', { templateUrl: '/sitebuilder/partials/components/accordion.html'  }).

    otherwise({redirectTo: '/sitebuilder'});
}]);