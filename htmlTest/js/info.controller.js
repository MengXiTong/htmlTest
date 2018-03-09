app.controller('infoCtrl', function ($scope) {
    console.log("infoCtrl执行了");
    // $scope.carname = "Volvo";
    $scope.tabs = [
        { name: 'Tab1' },
        { name: 'Tab2' },
        { name: 'Tab3' }
    ];

    $scope.oper = {
        tabSelect: tabSelect
    }

    /* 初始化
        ---------------------------------------------------------------- */
    function init() {
        tabSelect(0);
    }

    init();

    function tabSelect(index) {
        if($scope.tabs[index].isSelect){
            return;
        }
        for(var i=0;i<$scope.tabs.length;i++){
            if(i == index){
                $scope.tabs[i].isSelect = true;
            }
            else{
                $scope.tabs[i].isSelect = false;
            }
        }
    }
});