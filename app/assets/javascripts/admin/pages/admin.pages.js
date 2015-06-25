angular.module('Admin.Pages')
  .config([
    '$stateProvider',
    function ($stateProvider) {

      $stateProvider
        .state('admin.pages', {
          url: '/pages',
          abstract: true,
          templateUrl: '/templates/admin/pages/admin.pages.layout.html'
        })
        .state('admin.pages.index', {
          url: '/',
          templateUrl: '/templates/admin/pages/admin.pages.index.html',
          controller: 'AdminPagesIndexCtrl'
        })
        .state('admin.pages.new', {
          url: '/new/',
          templateUrl: '/templates/admin/pages/admin.page.edit.html',
          controller: 'AdminPageEditCtrl'
        })
        .state('admin.pages.edit', {
          url: '/{pageId:[0-9]+}/edit/',
          templateUrl: '/templates/admin/pages/admin.page.edit.html',
          controller: 'AdminPageEditCtrl'
        });

    }
  ]);