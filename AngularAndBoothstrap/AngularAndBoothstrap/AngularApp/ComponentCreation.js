var controllerBaseDir = 'AngularApp/Controllers/';

var viewBaseDir = 'AngularApp/Views/';

angular.module('cardApp').component('cardList', {
    templateUrl: viewBaseDir + 'CardListView.html',
    controller: 'cardListController',
    controllerAs: "vm"
});

angular.module('cardApp').component('cardDetail', {
    templateUrl: viewBaseDir + 'CardView.html',
    controller: 'cardDetail',
    controllerAs: 'vm'
});