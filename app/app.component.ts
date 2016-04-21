import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>

    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="#hero of heroes" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    `
})

export class Hero {
    id: number;
    name: string;
}

export class AppComponent {
    title = 'Tarik Infolog 2';

    selectedHero: Hero = {
        id: 1,
        name: 'Tarik Fojnica 2'
    };

    public heroes = HEROES;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];