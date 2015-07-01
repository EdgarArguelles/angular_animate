(function () {
    "use strict";
    angular.module('app', [
        'ngRoute',
        'ngAnimate',
        'app.group',
        'app.animatecss'])
        .config(config);

    function config($routeProvider) {
        //it manages only the templates witch don't have an angular module to control them
        $routeProvider
            .when('/home', {
                templateUrl: 'app/template/home.tpl.html'
            }).when('/about', {
                templateUrl: 'app/template/about.tpl.html'
            }).otherwise({
                redirectTo: '/home'
            });
    };
})();