angular.module('Admin.Pages')
  .controller('AdminPageEditCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    'AdminPagesService',
    function ($scope, $state, $stateParams, AdminPagesService) {

      // Simple variable that prevents the page to be created more than once
      // if the user clicks the save button again before the webservice responds
      var isSaving = false;


      // Simple variable that prevents the page from redirecting if there is
      // an error saving the page.
      var isError = false;


      // Take the pageId from $stateParams and find a matching Page from the service
      var getPage = function () {
        if( $stateParams['pageId'] ) {
          AdminPagesService.getById($stateParams['pageId']).then(function (response) {
            $scope.page = response.data;
          });
        } else {
          $scope.page = {};
        }
      };


      // Since the action after creating and updating a page, create one
      // function to pass twice
      var updatePage = function (response) {
        if( response.data.error ) {
          isError = true;
          console.error("There was a problem creating/updating a page:", response.data.error);
        } else {
          $scope.page = response.data;
        }
        isSaving = true;
      };


      var handleServiceError = function (response) {
        console.error('There was a problem creating/updating a page.', arguments);
      };


      // When the user clicks the 'save' button, this method either creates or updates
      // the page.
      $scope.save = function () {
        var promise;
        if( ! isSaving ) {
          isSaving = true;
          isError = false;
          if( $scope.page.id ) {
            // UPDATE
            promise = AdminPagesService.update($scope.page).then(updatePage, handleServiceError);
          } else {
            promise = AdminPagesService.create($scope.page).then(updatePage, handleServiceError);
          }
          return promise;
        }
      };


      $scope.saveAndClose = function () {
        var promise = $scope.save();
        promise.then(function (response) {
          if( ! isError ) {
            $state.go('admin.pages.index');
          }
        });
      };


      // INIT
      // Run this method when the controller loads.
      getPage();

    }
  ]);