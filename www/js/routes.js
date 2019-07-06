angular.module('projetoIonic')
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('listagem');

        $stateProvider
            .state('listagem', {
            url: '/listagem',
                templateUrl: 'templates/listagem.html',
                    controller: 'ListagemController'
        })

        .state('carroEscolhido',{
            url: '/carroEscolhido/:carro',
                templateUrl: 'templates/carroEscolhido.html',
                    controller: 'CarroEscolhidoController'
        })

        .state('finalizarPedido',{
            url: '/finalizarPedido',
                templateUrl: 'templates/finalizarPedido.html',
                    controller: 'FinalizarPedidoController'
        })

    });