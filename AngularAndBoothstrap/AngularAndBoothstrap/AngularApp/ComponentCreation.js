var controllerBaseDir = 'AngularApp/Controllers/';

var viewBaseDir = 'AngularApp/Views/';

angular.module('cardApp').component('cardList', {
    templateUrl: viewBaseDir+'CardListView.html',
    controller: 'Main'
})