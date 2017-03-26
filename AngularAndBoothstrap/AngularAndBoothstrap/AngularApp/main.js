(function () {
    'use strict';
    angular.module('cardApp').controller('Main', function main($uibModal, $log, $document) {
        var ctrl = this;
        ctrl.list = [{ id: 1 }, { id: 2 }];
        ctrl.items = ctrl.list;
        ctrl.open = function (size, parentSelector) {
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'AngularApp/Views/Modal/TestBSModal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'ctrl',
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