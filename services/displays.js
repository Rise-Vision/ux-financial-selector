financialApp.service('displaysService', function($http) {
  var service = {
    getAlldisplays: function() {
      return $http.get('data/displays.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    }
  }
  return service;
})