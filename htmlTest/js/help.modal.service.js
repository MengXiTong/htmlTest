app.service('helpModalService',[
    '$rootScope',
    '$ionicModal',
    function(
        $rootScope,
        $ionicModal
    ){
        var $scope = $rootScope.$new();
        var callbacks = {};
        var helpModalService = {
            showHelp1: function(param, success, fail){
                callbacks = {
                    success: success,
                    fail: fail
                }
                help1.show();
            }
        }

        var help1 = {
            show: function(){
                $ionicModal.fromTemplateUrl('../templates/help.modal.service.html',{
                    scope:$scope,
                    animation:'slide-in-left'
                }).then(function(modal){
                    console.log(modal);
                    $scope.help1 = modal;
                    $scope.help1.show();
                },function(){

                });
            },
            remove: function(){
                if($scope.help1){
                    $scope.help1.remove();
                }
            },
            isShown: function(){
                return $scope.help1&&$scope.help1.isShown();
            }
        }

        return helpModalService;
    }
])