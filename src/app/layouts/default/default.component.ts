import { Component } from "@angular/core";

@Component({
  selector: "app-default",
  template: `
    <p>default works!</p>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DefaultComponent {}
