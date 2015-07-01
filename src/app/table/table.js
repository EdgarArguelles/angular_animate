(function () {
    'use strict'
    angular.module('app.table', [])
        .config(config)
        .controller('TableCtrl', TableCtrl);

    function config($routeProvider) {
        $routeProvider
            .when('/table', {
                templateUrl: 'app/table/table.tpl.html',
                controller: 'TableCtrl as ctrl'
            });
    }

    function TableCtrl() {
        this.values = [
            {no: 1, name: 'Peter', lastName: 'Smith', phone: '555-456-445'},
            {no: 2, name: 'Aaron', lastName: 'Jones', phone: '782-456-123'},
            {no: 3, name: 'Marie', lastName: 'Taylor', phone: '552-725-123'},
            {no: 4, name: 'Abel', lastName: 'Smith', phone: '555-755-745'},
            {no: 5, name: 'Walter', lastName: 'White', phone: '555-750-664'},
            {no: 6, name: 'Marie', lastName: 'Garcia', phone: '555-485-123'}
        ];
    }
})();