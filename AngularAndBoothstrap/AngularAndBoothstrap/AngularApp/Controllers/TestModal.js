(function () {
    angular.module('cardApp').controller('TestModal', function ($uibModal, $log, $document) {
        ctrl = this;
        ctrl.items = ['item1', 'item2', 'item3'];
        ctrl.animationsEnabled = true;

        ctrl.open = function (size, parentSelector) {
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '',
                controller: 'modalInstanceCtrl',
                controllerAs: 'ctrl',
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return ctrl.items;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                ctrl.selected = selectedItem;
            }, function () {
                $log.info("modal dismissed at: " + new Date());
            });
        };

       

    });
})();