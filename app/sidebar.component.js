System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SidebarComponent, Course, COURSES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                    this.title = 'Tarik Infolog 2';
                    this.activeCourse = {
                        id: 1,
                        name: 'Tarik Fojnica3'
                    };
                    this.courses = COURSES;
                }
                SidebarComponent.prototype.onSelect = function (course) {
                    this.activeCourse = course;
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar',
                        template: "\n    <aside>\n        <h1>{{activeCourse.name}}</h1>\n        <ul class=\"heroes\">\n        <li *ngFor=\"#course of courses\" (click)=\"onSelect(hero)\">\n            <span class=\"badge\">{{course.name}}</span>\n        </li>\n    </ul>\n    </aside>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            })();
            exports_1("SidebarComponent", SidebarComponent);
            Course = (function () {
                function Course() {
                }
                return Course;
            })();
            exports_1("Course", Course);
            COURSES = [
                { "id": 1, "name": "Mr. Nice" },
                { "id": 2, "name": "Narco" },
                { "id": 3, "name": "Bombasto" },
            ];
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map