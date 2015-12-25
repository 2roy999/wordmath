
import '../data/data.service';

angular
  .module('wordmath')
  .service('problemsDialog', problemsDialog);

/* @ngInject */
function problemsDialog($document, $mdDialog, dataService) {

  this.show = show;


  function show(event) {
    return $mdDialog.show({
      controllerAs: 'vm',
      controller: DialogController,
      templateUrl: 'app/components/problems/problems.html',
      parent: $document.body,
      targetEvent: event,
      fullscreen: true,
      resolve: {
        problems: () => dataService.getProblems()
      }
    })
  }
}

/* @ngInject */
function DialogController ($mdDialog, problems) {
  let vm = this;

  vm.problems = problems;
  vm.answer = answer;
  vm.cancel = cancel;


  function answer(problem) {
    $mdDialog.hide(problem);
  }

  function cancel() {
    $mdDialog.cancel();
  }
}
