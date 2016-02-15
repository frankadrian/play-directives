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
            transclude:true,
            replace: true,
            templateUrl: 'scripts/directives/views/item-heading.html',
            restrict: 'E',
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
