app.controller('infoCtrl', [
    '$scope',
    '$resource',
    'helpModalService',
    function (
        $scope,
        $resource,
        helpModalService
    ){
        console.log("infoCtrl执行了");
        // $scope.carname = "Volvo";
        $scope.tabs = [
            { name: 'Tab1' },
            { name: 'Tab2' },
            { name: 'Tab3' }
        ];

        $scope.oper = {
            tabSelect: tabSelect,
            submit: submit
        }

        /* 初始化
            ---------------------------------------------------------------- */
        function init() {
            tabSelect(0);
            $scope.result = $resource('http://www.baidu.com',{},{
                getData:{
                    method:'GET'
                },
                putData:{
                    method: 'POST'
                }
            })
        }

        init();

        function tabSelect(index) {
            if ($scope.tabs[index].isSelect) {
                return;
            }
            for (var i = 0; i < $scope.tabs.length; i++) {
                if (i == index) {
                    $scope.tabs[i].isSelect = true;
                }
                else {
                    $scope.tabs[i].isSelect = false;
                }
            }
        }

        function submit(){
            // $scope.result.getData({userId:123},function(resp){
            //     console.log(resp);
            // }, function(error){
            //     console.log(error);
            // });
            helpModalService.showHelp1({},function(resp){

            },function(error){

            });
        }
    }
]);