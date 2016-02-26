'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
    .module('App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'fc.facebook'
    ])
    .config(function ($routeProvider, FacebookConfigProvider) {

        FacebookConfigProvider.setVersion('v2.5');
        FacebookConfigProvider.setStatus(false);
        FacebookConfigProvider.setCookie(false);
        FacebookConfigProvider.setXfbm(false);


        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main',
                resolve: {
                    items: ['Data', function (Data) {
                        return Data.getData();
                    }]
                }
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
