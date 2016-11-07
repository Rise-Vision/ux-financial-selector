financialApp.service('listsService', function($http) {
  var service = {
    getAllLists: function() {
      return $http.get('data/lists.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    }
  }
  return service;
})