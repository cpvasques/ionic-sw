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

        .state('sobre',{
            url: '/sobre',
                templateUrl: 'views/sobre.html',
                controller: 'SobreController'
        })

        .state('adicionar',{
            url: '/adicionar',
                templateUrl: 'views/adicionar.html',
                controller: 'AdicionarController'
        })

    });