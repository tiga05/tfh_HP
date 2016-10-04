/**
 * Created by Tim on 05.02.2016.
 */
/**
 * Created by Tim on 05.02.2016.
 */


var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/landing");
    //
    // Now set up the states
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "partials/state1.html"
        })

});
