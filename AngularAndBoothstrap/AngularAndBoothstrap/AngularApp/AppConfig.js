angular.module('cardApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: true,
        //    rewriteLinks: false
        //});
        $routeProvider.when('/cards',
            {
                template: '<card-List></card-List>'
            }).
            when('/cards/:id',
            {
                template: '<card-detail><card-detail>'
            }).
            otherwise('/cards');
    }]);