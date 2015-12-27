
import '../problems/problems.dialog';

angular
  .module('wordmath')
  .directive('wmHeader', headerDirective);

/* @ngInject */
function headerDirective () {
  return {
    restrict: 'EA',
    templateUrl: 'app/components/header/header.html',
    scope: {},
    controllerAs: 'vm',
    controller: controller
  };

  /* @ngInject */
  function controller(problemsDialog) {
    let vm = this;

    vm.text = 'משהו משהו????';

    vm.showProblemsDialog = selectDialog;

    //vm.showProblemsDialog();

    function selectDialog(event) {
      problemsDialog.show(event)
        .then(selectionCompleted)
        .catch(selectionCanceled);

      function selectionCompleted(problem) {
        vm.text = problem.text;
      }

      function selectionCanceled() {
      }
    }
  }
}

