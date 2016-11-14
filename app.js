var financialApp = angular.module('financialApp', ['ui.router','ui.bootstrap']);


financialApp.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { name: 'login', url: '', component: 'login' },
    { name: 'about', url: '/about', component: 'about' },
    
    { 
      name: 'displays', 
      url: '/displays', 
      component: 'displays',
      resolve: {
        displays: function(displaysService) {
          return displaysService.getAlldisplays();
        }
      }
    },

    { 
      name: 'displayFinancialList', 
      url: '/financial-list', 
      component: 'displayFinancialList',
      resolve: {
        lists: function(listsService) {
          return listsService.getAllLists();
        }
      }
    },

    { 
      name: 'displayUsers', 
      url: '/users', 
      component: 'displayUsers',
      resolve: {
        users: function(usersService) {
          return usersService.getAllUsers();
        }
      }
    },

    { 
      name: 'financialListInstruments', 
      url: '/instruments', 
      component: 'financialListInstruments',
      resolve: {
        instruments: function(instrumentsService) {
          return instrumentsService.getAllInstruments();
        }
      }
    }
    
    
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });

  
});


financialApp.run(function($http, $uiRouter) {
  $http.get('data/displays.json', { cache: true });
  $http.get('data/list.json', { cache: true });
  $http.get('data/users.json', { cache: true });
  $http.get('data/instruments.json', { cache: true });
});


financialApp.controller('ModalCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (template,parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: template,
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: 'medium',
      appendTo: parentElem
    });

    modalInstance.result.then(function (selectedItem) {
      
    });
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

financialApp.controller('ModalInstanceCtrl', function ($uibModalInstance) {
  var $ctrl = this;
  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

financialApp.controller('OptionsController',function ($scope){
      
      $scope.users = [
      {name:'Stocks', id:1},
      {name:'Market Statistics', id:3},
      {name:'World Indexes', id:5},
      {name:'Bonds', id:7},
      {name:'Commodities', id:6},
      {name:'Currencies', id:8}
      ]
      
      $scope.selectedUser = 5;
      
});

