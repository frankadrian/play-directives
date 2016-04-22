'use strict';

/**
 * @ngdoc service
 * @name App.data
 * @description
 * # data
 * Service in the App.
 */
angular.module('App')
    .service('Data', function ($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.getData = function () {
            return $http.get('data.json').then(function (response) {

                if (response.statusText === 'OK' && response.data.items.length) {
                    return response.data.items;
                }

            });
        }

    });
