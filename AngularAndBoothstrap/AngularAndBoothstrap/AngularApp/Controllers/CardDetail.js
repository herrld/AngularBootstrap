(function () {
    angular.module('cardApp').controller('cardDetail', function ($routeParams) {
        this.id = $routeParams.id;
    });
})();