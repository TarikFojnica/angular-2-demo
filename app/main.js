System.register(['angular2/platform/browser', "./courseDetails.component"], function(exports_1) {
    var browser_1, courseDetails_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (courseDetails_component_1_1) {
                courseDetails_component_1 = courseDetails_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            browser_1.bootstrap(courseDetails_component_1.CourseDetailsComponent);
        }
    }
});
//# sourceMappingURL=main.js.map