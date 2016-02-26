'use strict';

/**
 * @ngdoc directive
 * @name App.directive.facebook:facebook
 * @description
 * # facebook
 */
angular.module('fc.facebook')
    .directive('facebook', function () {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/facebook/views/facebook.html',
            controller: function ($window, FacebookService) {

                function loadFacebook(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.async = true;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }

                loadFacebook($window.document, 'script', 'facebook-jssdk');

                $window.fbAsyncInit = function () {
                    FacebookService.setFB(FB);
                };
            }
        };
    });
