app.controller('infoCtrl', [
    '$scope',
    '$resource',
    'helpModalService',
    '$state',
    '$interval',
    '$ionicScrollDelegate',
    function (
        $scope,
        $resource,
        helpModalService,
        $state,
        $interval,
        $ionicScrollDelegate
    ) {
        console.log("infoCtrl执行了");
        // $scope.carname = "Volvo";
        $scope.tabs = [
            { name: '测试' },
            { name: 'Tab2' },
            { name: 'ES6' }
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
            },
            testPromise: {
                name: "多个Promise处理",
                fun: testPromise
            },
            testCircular: {
                name: "圆形进度条",
                fun: function(){
                    $state.go('testCircular');
                }
            },
            iframe: {
                name: "iframe获取子dom",
                fun: function(){
                    // var bdhtml = window.document.body.innerHTML;
                    // console.log($("#iframeId").contents().find('body')[0].innerHTML);
                    // window.document.body.innerHTML = $("#iframeId").contents().find('body')[0].innerHTML;
                    // window.print();
                    // window.document.body.innerHTML = bdhtml;
                    // window.location.reload();
                    // console.log(window.frames["iframeId"].contentDocument.body.innerHTML);
                    // console.log(document.getElementById('iframeId').contentDocument.body.innerHTML);
                    // console.log($('#dom1')[0].innerHTML);
                    // console.log(document.getElementById('dom1').innerHTML);
                    document.querySelector('#iframeId').contentWindow.postMessage({print: true}, '*');
                }
            },
            luoJiFei: {
                name: "逻辑非",
                fun: function(){
                    var a = (-1)||1;
                    console.log(a);
                }
            }
        }

        $scope.es6 = {
            testConst:{
                printValue: function(){
                    const a = "大家好，我是静态变量Const";
                    return a;
                }
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
            getIndicator();
            timer = $interval(()=>$scope.currentTime = Date.now(),1000);
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

        function getIndicator(){
            var date = new Date();
            var month = date.getMonth()+1;
            var year = date.getFullYear();
            var currentMonth = year.toString()+month;
            if(month==1){
                previousMonth = (year-1).toString()+12;
            }
            else{
                previousMonth = year.toString();
                if(--month<10){
                    previousMonth += '0';
                }
                previousMonth += month;
            }
            console.log("当前月份",currentMonth);
            console.log("上个月份",previousMonth);
        }

        function getWeather() {
            return new Promise(function (resolve, reject) {
                $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function (_result) {
                    if (remote_ip_info.ret == '1') {
                        cityName = remote_ip_info.city;
                        console.log(cityName);
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

        function testPromise() {
            console.log("testPromise");
            Promise.all([promise1(),promise2(),promise3()]).then(function () {
                console.log("发送成功");
            });
        }

        function promise1(){
            var promise1 = new Promise(function (resolve, reject) {
                console.log("1");
                resolve();
            });
            return promise1;
        }
        function promise2(){
            var promise2 = new Promise(function (resolve, reject) {
                console.log("2");
                resolve();
            });
            return promise2;
        }
        function promise3(){
            var promise3= new Promise(function (resolve, reject) {
                console.log("3");
                resolve();
            });
            return promise3;
        }

        $scope.$on("$destroy", function () {
            if(timer){
                console.log("清空计时器");
                clearTimeout(timer);
            }
        });
    }
]);