(function () {
    'use strict';
    angular.module('cardApp').controller('Main', main);

    function main($scope) {
        $scope.list = [{ id: 1 }, { id: 2 }];
    }
})();