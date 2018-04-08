app.controller('testCircularCtrl', ['$scope', function ($scope) {
    // $scope.value = Math.round((415/4678)*100);
    $scope.value = 60;
    $scope.styleLeft = function () {
        var deg = $scope.value * 0.01 * 360 - 180;
        if (deg > 0) {
            var style = {
                '-webkit-transform': 'rotate(-' + deg + 'deg)',
                'transform': 'rotate(-' + deg + 'deg)'
            }
            return style;
        }
        return;
    }
    $scope.styleRight = function () {
        var deg = $scope.value * 0.01 * 360;
        if (deg > 180) {
            deg = 180;
        }
        var style = {
            '-webkit-transform': 'rotate(-' + deg + 'deg)',
            'transform': 'rotate(-' + deg + 'deg)'
        }
        return style;
    }
}]);