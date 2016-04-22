System.register(['angular2/platform/browser', './app.component', "./sidebar.component"], function(exports_1) {
    var browser_1, app_component_1, sidebar_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            browser_1.bootstrap(sidebar_component_1.SidebarComponent);
        }
    }
});
//# sourceMappingURL=main.js.map