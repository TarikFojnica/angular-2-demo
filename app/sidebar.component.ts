import {Component} from 'angular2/core';

@Component({
    selector: 'sidebar',
    template: `
    <aside>
        <h1>{{activeCourse.name}}</h1>
        <ul class="heroes">
        <li *ngFor="#course of courses" (click)="onSelect(hero)">
            <span class="badge">{{course.name}}</span>
        </li>
    </ul>
    </aside>
    `
})

export class SidebarComponent {
    title = 'Tarik Infolog 2';

    activeCourse: Course = {
        id: 1,
        name: 'Tarik Fojnica3'
    };

    public courses = COURSES;

    onSelect(course: Course) {
        this.activeCourse = course;
    }
}

export class Course {
    id: number;
    name: string;
}

var COURSES: Course[] = [
    { "id": 1, "name": "Mr. Nice" },
    { "id": 2, "name": "Narco" },
    { "id": 3, "name": "Bombasto" },
];
