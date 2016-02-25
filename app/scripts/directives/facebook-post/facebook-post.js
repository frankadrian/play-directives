'use strict';

/**
 * @ngdoc directive
 * @name App.directive.facebook:facebookPost
 * @description
 * # facebookPost
 */
angular.module('App')
    .directive('facebookPost', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/facebook-post/views/facebook-post.html',
            controller: function () {
                console.log("facebookPost controller");
            },
            compile: function () {
                console.log("facebookPost compile");

                return {
                    pre: function postLink(scope, element, attrs) {
                        console.log("facebookPost pre link");
                    },
                    post: function postLink(scope, element, attrs) {
                        console.log("facebookPost post link");
                    }
                };
            }
        };
    });
