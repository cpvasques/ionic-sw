
angular.module('projetoIonic')
    .controller('VeiculoEscolhidoController', function ($stateParams, $scope) {

        $scope.veiculoEscolhido = angular.fromJson($stateParams.veiculo);
        if($scope.veiculoEscolhido.faccao == "Rebelde"){
            $scope.faccaoImg = "../../img/rebel_alliance.png"
        }else{
            $scope.faccaoImg = "../../img/empire.png"
        }
        
        $scope.listaDeAcessorios = [
            { 'nome': "R2D2 Droid", 'preco': 1800 },
            { 'nome': "BB-8", 'preco': 1000 },
            { 'nome': "U9-C4", 'preco': 500 }
        ];

        $scope.mudou = function (acessorio, isMarcado) {
            if (isMarcado) {
                $scope.veiculoEscolhido.preco = $scope.veiculoEscolhido.preco + acessorio.preco;
            } else {
                $scope.veiculoEscolhido.preco = $scope.veiculoEscolhido.preco - acessorio.preco;
            }
        };

    });