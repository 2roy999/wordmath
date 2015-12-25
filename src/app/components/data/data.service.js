
angular
  .module('wordmath')
  .service('dataService', DataService);

/* @ngInject */
function DataService($http, $log) {
  this.getProblems = getProblems;

  function getProblems() {
    return $http.get('/data/problems.json')
      .then(getProblemsComplete)
      .catch(getProblemsFailed);

    function getProblemsComplete(response) {
      return response.data;
    }

    function getProblemsFailed(error) {
      $log.error('Loading problems failed: ' + error.data);
    }
  }
}
