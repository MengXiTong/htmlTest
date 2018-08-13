app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('user', {
            cache: false,
            url: '/user',
            templateUrl: 'show.html',
            controller: 'myCtrl'
        })
        .state('info', {
            cache: true,
            url: '/info',
            templateUrl: 'info.html',
            controller: 'infoCtrl'
        })
        .state('testCircular', {
            cache: true,
            url: '/testCircular',
            templateUrl: 'testCircular.html',
            controller: 'testCircularCtrl'
        })
        .state('es6Class', {
            cache: true,
            url: '/es6Class',
            template: "<h1>es6Class写Controller<small>这是一个副标题</small></h1>",
            controller: 'es6ClassCtrl'
        })
    $urlRouterProvider.otherwise('/user');
})