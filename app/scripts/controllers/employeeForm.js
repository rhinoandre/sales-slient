'use strict';
angular.module('salesClient')
    $scope.save = function(){
            EmployeeService.getAll();
            $state.go('employees');
        });
    $scope.del = function(){