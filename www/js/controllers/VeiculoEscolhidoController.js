
angular.module('projetoIonic')
    .controller('VeiculoEscolhidoController', function ($stateParams, $scope) {

        $scope.veiculoEscolhido = angular.fromJson($stateParams.veiculo);
        if ($scope.veiculoEscolhido.faccao == "Rebelde") {
            $scope.faccaoImg = "../../img/rebel_alliance.png"
        } else {
            $scope.faccaoImg = "../../img/empire.png"
        }
    });