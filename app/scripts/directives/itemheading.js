'use strict';

/**
 * @ngdoc directive
 * @name App.directive:itemHeading
 * @description
 * # itemHeading
 */
angular.module('App')
    .directive('itemHeading', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/directives/views/item-heading.html',
            controller: function () {
                console.log("itemHeading controller");
            },
            compile: function () {
                console.log("itemHeading compile");

                return {
                    pre: function postLink(scope, element, attrs) {
                        console.log("itemHeading pre link");
                    },
                    post: function postLink(scope, element, attrs) {
                        console.log("itemHeading post link");
                    }
                };
            }
        };
    });
