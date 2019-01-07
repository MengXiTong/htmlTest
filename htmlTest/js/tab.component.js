app.component("tab", {
    bindings: {
        id: "<"
    },
    template:"<h1>组件化封装的内容<small>这是一个副标题</small></h1>",
    controller: class tabCtrl {
        constructor($resource,$rootScope) {
            "ngInject";
            this.$resource = $resource;
            this.$rootScope = $rootScope;
            // console.log(this.$rootScope);
            console.log("执行了constructor");
        }

        $onInit() {
            console.log("执行了onInit");
        }

        //返回
        back() {
            window.history.back(-1);
        }
    }
});