angular.module('Admin.Pages')
  .service('AdminPagesService', [
    '$http',
    function ($http) {
      var service = {};

      service.getAll = function () {
        return $http.get('/admin/pages.json');
      };

      service.getById = function (pageId) {
        return $http.get('/admin/pages/'+ parseInt(pageId, 10) +'.json');
      };

      service.create = function (page) {
        return $http.post('/admin/pages.json', { page: page });
      };

      service.update = function (page) {
        return $http.put('/admin/pages/'+ parseInt(page.id, 10) +'.json', { page: page });
      };

      service.destroy = function (pageId) {
        return $http.delete('/admin/pages/'+ parseInt(pageId, 10) +'.json');
      };

      return service;
    }
  ]);