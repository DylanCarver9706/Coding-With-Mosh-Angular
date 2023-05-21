import { Component } from "@angular/core"; // import declerations

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
    courses = ["course1", "course2", "course3"]

    // Can be called by invoking the fuction in the template
    // getTitle() {
    //     return this.title;
    // }
}