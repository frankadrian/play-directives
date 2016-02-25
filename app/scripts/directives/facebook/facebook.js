'use strict';

/**
 * @ngdoc directive
 * @name App.directive.facebook:facebook
 * @description
 * # facebook
 */
angular.module('App')
    .directive('facebook', function ($window) {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/facebook/views/facebook.html',
            controller: function () {
                console.log("facebook controller");
            },
            compile: function () {
                console.log("facebook compile");

                function initializeFacebook(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
                    fjs.parentNode.insertBefore(js, fjs);
                }

                initializeFacebook($window.document, 'script', 'facebook-jssdk');

                return {
                    pre: function postLink(scope, element, attrs) {
                        console.log("facebook pre link");
                    },
                    post: function postLink(scope, element, attrs) {
                        console.log("facebook post link");
                    }
                };
            }
        };
    });
