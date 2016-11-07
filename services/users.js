financialApp.service('usersService', function($http) {
  var service = {
    getAllUsers: function() {
      return $http.get('data/users.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    }
  }
  return service;
})