(function () {
    'use strict';
    angular.module('app.animatecss.list', [])
        .config(config)
        .controller('ListCtrl', ListCtrl);

    function config($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'app/animatecss/list/list.tpl.html',
                controller: 'ListCtrl as ctrl'
            });
    }

    function ListCtrl() {
        this.values = [
            'Angular',
            'JavaScript',
            'Scope',
            'Directive',
            'Controller',
            'service',
            'Factory',
            'Digest',
            'Injection',
            'Module',
            'Provider',
            'Filter'
        ];
    }
})();