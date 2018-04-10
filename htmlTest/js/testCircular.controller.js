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
    /**
     * 大转盘,缺少jQuery插件。。。
     * ----------------------------------------------------------------------------
     */
    // $("#lotteryBtn").click(function () {
    //     var angle = Math.random() * 360;
    //     angle = Math.ceil(angle);//0到360的随机整数
    //     $("#lotteryBtn").rotate({//旋转
    //         angle: 90, //角度
    //         duration: 6000, //持续时间
    //         animateTo: angle + 2160, //angle是图片上各奖项对应的角度，2160是我要让指针旋转6圈。所以最后的结束的角度就是这样子^^
    //         callback: function () {
    //             alert(angle + "度 持续时间6秒 转了6圈！");
    //             window.location.href = window.location.href;
    //         }
    //     });
    // });
}]);