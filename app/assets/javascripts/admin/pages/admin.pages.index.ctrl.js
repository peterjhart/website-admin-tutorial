angular.module('Admin.Pages')
  .controller('AdminPagesIndexCtrl', [
    '$scope',
    'AdminPagesService',
    function ($scope, AdminPagesService) {

      var getPages = function () {
        AdminPagesService.getAll().then(function (response) {
          $scope.pages = response.data;
        });
      };

      // INIT
      getPages();

    }
  ]);