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
    var CourseDetailsComponent, Course, COURSES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CourseDetailsComponent = (function () {
                function CourseDetailsComponent() {
                    this.courses = COURSES;
                    this.activeCourse = {
                        "id": 1,
                        "name": "Computer Architecture",
                        "quiz1": 80,
                        "quiz2": 70,
                        "midterm": 80,
                        "final": 40,
                        "total": "C"
                    };
                }
                CourseDetailsComponent.prototype.onSelect = function (course) {
                    this.activeCourse = course;
                };
                CourseDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'course-details',
                        template: "\n    <div class=\"row page-details\">\n        <div class=\"col-lg-12\">\n            <h2>Grade Details</h2>\n        </div>\n\n        <div class=\"col-lg-4\">\n            <ul class=\"heroes\">\n\n            <li *ngFor=\"#course of courses\" (click)=\"onSelect(course)\" [class.active]=\"activeCourse === course\">\n                {{course.name}}\n            </li>\n            <!--<input type=\"text\" [(ngModel)]=\"activeCourse.name\">-->\n            </ul>\n        </div>\n\n        <div class=\"col-lg-8\">\n            <div class=\"course-details\">\n                <h3>{{activeCourse.name}}</h3>\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Quiz 1</th>\n                            <th>Quiz 2</th>\n                            <th>Midterm</th>\n                            <th>Final</th>\n                            <th>Grade</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>{{activeCourse.quiz1}}</td>\n                            <td>{{activeCourse.quiz2}}</td>\n                            <td>{{activeCourse.midterm}}</td>\n                            <td>{{activeCourse.final}}</td>\n                            <td>{{activeCourse.total}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseDetailsComponent);
                return CourseDetailsComponent;
            })();
            exports_1("CourseDetailsComponent", CourseDetailsComponent);
            Course = (function () {
                function Course() {
                }
                return Course;
            })();
            exports_1("Course", Course);
            COURSES = [
                {
                    "id": 1,
                    "name": "Computer Architecture",
                    "quiz1": 80,
                    "quiz2": 70,
                    "midterm": 80,
                    "final": 40,
                    "total": "C"
                },
                {
                    "id": 2,
                    "name": "Database Systems",
                    "quiz1": 80,
                    "quiz2": 70,
                    "midterm": 80,
                    "final": 40,
                    "total": "C"
                },
                {
                    "id": 3,
                    "name": "Logic Design",
                    "quiz1": 80,
                    "quiz2": 70,
                    "midterm": 80,
                    "final": 40,
                    "total": "C"
                },
                {
                    "id": 4,
                    "name": "Advanced Programming",
                    "quiz1": 80,
                    "quiz2": 70,
                    "midterm": 80,
                    "final": 40,
                    "total": "C"
                },
            ];
        }
    }
});
//# sourceMappingURL=courseDetails.component.js.map