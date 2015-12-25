
import '../problems/problems.dialog';

angular
  .module('wordmath')
  .directive('wmHeader', problemDirective);

/* @ngInject */
function problemDirective () {
  return {
    restrict: 'EA',
    templateUrl: 'app/components/header/header.html',
    controllerAs: 'vm',
    controller: Controller
  };
}

/* @ngInject */
function Controller(problemsDialog) {
  let vm = this;

  vm.text = 'בחר בעיה!';

  vm.showProblemsDialog = selectDialog;

  vm.showProblemsDialog();

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
