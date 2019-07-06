angular.module('projetoIonic')
.controller('ListagemController', function($scope, $http){

    $http({
        method : "GET",
          url : "../../js/controllers/naves.json"
      }).then(function mySuccess(response) {
        $scope.listaDeVeiculos = response.data;
      }, function myError(response) {
        $scope.listaDeVeiculos = response.statusText;
      });

});