angular.module('Admin.Pages', ['Admin']);

angular.module('Admin', ['ui.router', 'Admin.Pages'])
  .constant('TEMPLATE_PATH', '/templates/admin/')
  .config([
    '$locationProvider',
    '$stateProvider',
    function ($locationProvider, $stateProvider) {

      $locationProvider.html5Mode({enabled:true, requireBase:false});

      $stateProvider
        .state('admin', {
          url: "/admin",
          abstract: true,
          template: '<div ui-view></div>'
        })
      }
  ]);