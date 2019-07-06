angular.module('projetoIonic')
.controller('ListagemController', function($scope){

    $scope.listaDeCarros = [
         {'nome': 'BMW 120i', 'preco': 80000},
         {'nome': 'ONIX 1.6', 'preco': 45000},
         {'nome': 'Fiesta 2.0', 'preco': 45000},
         {'nome': 'C3 1.0', 'preco': 35000},
         {'nome': 'Uno Fire', 'preco': 30000},
         {'nome': 'Sentra 2.0', 'preco': 60000},
         {'nome': 'Astra Sedan', 'preco': 17000},
         {'nome': 'Vectra 2.0 Turbo', 'preco': 18000},
         {'nome': 'Hilux 4x4', 'preco': 75000},
         {'nome': 'Montana Cabine dupla', 'preco': 50000},
         {'nome': 'Outlander 2.4', 'preco': 150000},
         {'nome': 'Fusca 1500', 'preco': 7500}
    ];

});

angular.module('projetoIonic')
.controller('CarroEscolhidoController', function($stateParams, $scope){

    $scope.carroEscolhido = angular.fromJson($stateParams.carro);

    $scope.listaDeAcessorios = [
        {'nome': "Freio ABS", 'preco': 800},
        {'nome': "Ar Condicionado", 'preco': 1000},
        {'nome': "Rádio Bluetooth", 'preco': 500}
    ];

    $scope.mudou = function(acessorio, isMarcado){
        if(isMarcado){
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
        }else{
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
        }
    };

});

angular.module('projetoIonic')
.controller('FinalizarPedidoController', function($stateParams, $scope){


});