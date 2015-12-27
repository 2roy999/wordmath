
import '../catalog/catalog.directive';

angular
  .module('wordmath')
  .directive('wmCanvas', canvasDirective);

/* @ngInject */
function canvasDirective() {
  return {
    restrict: 'EA',
    templateUrl: 'app/components/canvas/canvas.html',
    scope: {},
    controllerAs: 'vm',
    controller: controller
  };

  /* @ngInject */
  function controller () {
    //let vm = this;
  }
}
