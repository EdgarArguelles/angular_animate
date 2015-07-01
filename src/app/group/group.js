(function () {
    'use strict';
    angular.module('app.group', [])
        .config(config)
        .controller('GroupCtrl', GroupCtrl);

    // this module manages its own route
    function config($routeProvider) {
        $routeProvider
            .when('/group', {
                templateUrl: 'app/group/group.tpl.html',
                controller: 'GroupCtrl as ctrl'
            });
    }

    function GroupCtrl() {
        this.groupA = [1, 2, 3];
        this.groupB = [4, 5];
    }

    GroupCtrl.prototype = {
        moveToB: function (item) {
            move(item, this.groupA, this.groupB);
        },
        moveToA: function (item) {
            move(item, this.groupB, this.groupA);
        }
    };

    function move(item, arrFrom, arrTo) {
        //remove from
        var index = arrFrom.indexOf(item);
        arrFrom.splice(index, 1);
        //add to
        arrTo.push(item);
    }
})();