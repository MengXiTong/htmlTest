(() => {
    let injects = [
        "$resource",
        "$ionicLoading",
    ];
    app.service("activeService", [
        ...injects,
        class activeService {
            constructor(...args) {
                console.log(args);
                console.log("activeService");
            }
        }
    ])
})();