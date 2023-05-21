import { Component } from "@angular/core"; // import declerations
// import { CoursesService } from "./courses.service";

@Component({ // making custom HTML elements
    selector: 'courses',
    template: `<h2>{{ title }}<h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li> 
    <ul>
    `
})
export class CoursesComponent {
    title = "List of courses"
    courses

    // Can be called by invoking the fuction in the template
    // getTitle() {
    //     return this.title;
    // }
}