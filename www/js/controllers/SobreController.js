angular.module('projetoIonic')
.controller('SobreController', function ($stateParams, $scope) {

    $scope.listaDeSkill = [
        { 'nome': 'JavaScript' , 'loading': 'ion-checkmark' },
        { 'nome': 'JQuery', 'loading': 'ion-checkmark' },
        { 'nome': 'AngularJS', 'loading': 'ion-checkmark' },
        { 'nome': 'React', 'loading': 'ion-checkmark' },
        { 'nome': 'React-Native', 'loading': 'ion-checkmark' },
        { 'nome': 'NodeJS', 'loading': 'ion-checkmark' },
        { 'nome': 'MongoDB', 'loading': 'ion-checkmark' },
        { 'nome': 'Em progresso: Ionic V1', 'loading': 'ion-alert' }
    ];
});