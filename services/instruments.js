financialApp.service('instrumentsService', function($http) {
  var service = {
    getAllInstruments: function() {
      return $http.get('data/instruments.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    }
  }
  return service;
})