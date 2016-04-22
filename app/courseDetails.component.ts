import {Component} from 'angular2/core';

@Component({
    selector: 'course-details',
    template: `
    <div class="row page-details">
        <div class="col-lg-12">
            <h2>Grade Details</h2>
        </div>

        <div class="col-lg-4">
            <ul class="heroes">

            <li *ngFor="#course of courses" (click)="onSelect(course)" [class.active]="activeCourse === course">
                {{course.name}}
            </li>
            <!--<input type="text" [(ngModel)]="activeCourse.name">-->
            </ul>
        </div>

        <div class="col-lg-8">
            <div class="course-details">
                <h3>{{activeCourse.name}}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Quiz 1</th>
                            <th>Quiz 2</th>
                            <th>Midterm</th>
                            <th>Final</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{activeCourse.quiz1}}</td>
                            <td>{{activeCourse.quiz2}}</td>
                            <td>{{activeCourse.midterm}}</td>
                            <td>{{activeCourse.final}}</td>
                            <td>{{activeCourse.total}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `
})

export class CourseDetailsComponent {
    public courses = COURSES;

    activeCourse: Course = {
        "id": 1,
        "name": "Computer Architecture",
        "quiz1": 80,
        "quiz2": 70,
        "midterm": 80,
        "final": 40,
        "total": "C"
    };

    onSelect(course: Course) {
        this.activeCourse = course;
    }
}

export class Course {
    id: number;
    name: string;
    quiz1: number;
    quiz2: number;
    midterm: number;
    final: number;
    total: string;
}

var COURSES: Course[] = [
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
