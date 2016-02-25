'use strict';

/**
 * @ngdoc directive
 * @name App.directive.item:item
 * @description
 * # item
 */
angular.module('App')
    .directive('item', function () {
        return {
            restrict: 'E',
            controller: function () {
                console.log("item controller");
            },
            compile: function () {
                console.log("item compile");

                return {
                    pre: function postLink(scope, element, attrs) {
                        console.log("item pre link");
                    },
                    post: function postLink(scope, element, attrs) {
                        console.log("item post link");
                    }
                };
            }
        };
    });
