angular.module('projetoIonic')
    .controller('AdicionarController', function ($scope, $http) {

        $scope.adicionar = function () {

            var data = [{
                "nome": $scope.nome,
                "classe": $scope.classe,
                "faccao": $scope.faccao,
                "descricao": $scope.descricao
            }];

            $http.post('suaURL', data).then(function (response) {
                console.log(response);
            });
        }
    });