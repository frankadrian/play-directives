'use strict';

/**
 * @ngdoc directive
 * @name App.directive.item:itemBody
 * @description
 * # itemBody
 */
angular.module('App')
    .directive('itemBody', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/directives/item/views/item-body.html',
            controller: function () {
                console.log("itemBody controller");
            },
            compile: function () {
                console.log("itemBody compile");

                return {
                    pre: function postLink(scope, element, attrs) {
                        console.log("itemBody pre link");
                    },
                    post: function postLink(scope, element, attrs) {
                        console.log("itemBody post link");
                    }
                };
            }
        };
    });
