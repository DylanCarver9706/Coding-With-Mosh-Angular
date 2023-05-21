import { Component } from "@angular/core"; // import declerations

@Component({ // making custom HTML elements
    selector: 'courses',
    template: '<h2>{{ "Title: " + getTitle() }}<h2>' 
})
export class CoursesComponent {
    title = "List of courses"

    getTitle() {
        return this.title;
    }
}