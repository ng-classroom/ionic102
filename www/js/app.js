angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })
    .state('people', {
      url: '/people',
      controller: 'PeopleController',
      templateUrl: 'views/people/people.html'
    });

  $urlRouterProvider.otherwise('/home');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
