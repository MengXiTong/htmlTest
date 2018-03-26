app.controller('infoCtrl', [
    '$scope',
    '$resource',
    'helpModalService',
    function (
        $scope,
        $resource,
        helpModalService
    ) {
        console.log("infoCtrl执行了");
        // $scope.carname = "Volvo";
        $scope.tabs = [
            { name: 'Tab1' },
            { name: 'Tab2' },
            { name: 'Tab3' }
        ];

        $scope.oper = {
            tabSelect: tabSelect,
        }

        $scope.study = {
            modal: {
                name: "模态框",
                fun: modal
            },
            service: {
                name: "接口服务",
                fun: service
            },
            getWeather: {
                name: "获取当前所在城市天气",
                fun: getWeatherValue
            }
        }

        /* 初始化
            ---------------------------------------------------------------- */
        function init() {
            tabSelect(0);
            $scope.result = $resource('http://www.baidu.com', {}, {
                getData: {
                    method: 'GET'
                },
                putData: {
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

        function service() {
            $scope.result.getData({ userId: 123 }, function (resp) {
                console.log(resp);
            }, function (error) {
                console.log(error);
            });
        }

        function modal() {
            helpModalService.showHelp1({}, function (resp) {

            }, function (error) {

            });
        }

        function getWeatherValue(){
            getWeather().then(function(resp){
                console.log(resp);
            });
        }

        function getWeather() {
            return new Promise(function (resolve, reject) {
                $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function (_result) {
                    if (remote_ip_info.ret == '1') {
                        cityName = remote_ip_info.city;
                    }
                    $.ajax({
                        url: "http://api.map.baidu.com/telematics/v3/weather",
                        type: "get",
                        data: {
                            location: cityName,
                            output: 'json',
                            ak: '6tYzTvGZSOpYB5Oc2YGGOKt8'
                        },
                        dataType: "jsonp",
                        success: function (data) {
                            if (data.results) {
                                var result = data.results[0];
                                var param = {
                                    currentCity: result.currentCity,
                                    pm25: result.pm25,
                                    weather: result.weather_data[0].weather,
                                    temperature: result.weather_data[0].date.match(/：(\S*)\)/)[1],
                                }
                                if(param.pm25>300){
                                    param.air = '严重污染';
                                }
                                else if(param.pm25>200){
                                    param.air = '重度污染'; 
                                }
                                else if(param.pm25>150){
                                    param.air = '中度污染'; 
                                }
                                else if(param.pm25>100){
                                    param.air = '轻度污染';
                                }
                                else if(param.pm25>50){
                                    param.air = '良'; 
                                }
                                else if(param.pm25>=0){
                                    param.air = '优'; 
                                }
                                resolve(param);
                            }
                        }
                    })
                });
            });
        }
    }
]);