angular.module('projetoIonic')
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('listagem');

        $stateProvider
            .state('listagem', {
            url: '/listagem',
                templateUrl: 'views/listagem.html',
                    controller: 'ListagemController'
        })

        .state('veiculoEscolhido',{
            url: '/veiculoEscolhido/:veiculo',
                templateUrl: 'views/veiculoEscolhido.html',
                    controller: 'VeiculoEscolhidoController'
        })

        .state('finalizarPedido',{
            url: '/finalizarPedido',
                templateUrl: 'views/finalizarPedido.html',
                    controller: 'FinalizarPedidoController'
        })

    });