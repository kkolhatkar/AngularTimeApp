var module = angular.module("myApp", []);
module.controller("myFnc", timeFnc);
function timeFnc($scope) {
    var currentDate = new Date();
    $scope.time = currentDate.toTimeString();
    $scope.updateTime = function () {
        var currentDate = new Date();
        $scope.time = currentDate.toTimeString();
    }
}