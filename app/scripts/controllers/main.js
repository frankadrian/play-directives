'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
angular.module('App')
    .controller('MainCtrl', function (items, $scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.urls = ['https://www.facebook.com/20531316728/posts/10154009990506729/'];
        $scope.items = items.data.items;
    });

