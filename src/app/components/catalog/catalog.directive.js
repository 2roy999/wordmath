

angular
  .module('wordmath')
  .directive('wmCatalog', catalogDirective);

function catalogDirective() {
  return {
    restrict: 'EA',
    templateUrl: 'app/components/catalog/catalog.html',
    controllerAs: 'vm',
    controller: controller
  };

  function controller () {
    //let vm = this;
  }
}
