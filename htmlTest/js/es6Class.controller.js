(()=>{
    let injects = [
        "$resource",
        "$ionicLoading",
    ];
    app.controller("es6ClassCtrl", [
        ...injects,
        class es6ClassCtrl {
            constructor(...args) {
                console.log(args);
                console.log("es6ClassCtrl");
            }
        }
    ])
})();