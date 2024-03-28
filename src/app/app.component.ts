import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collegedunia';
   searchTerm: string = '';

  constructor() { }

  search() {
    // Implement your search logic here
    console.log('Searching for:', this.searchTerm);
    // You can perform further actions like navigating to a search results page, filtering products, etc.
  } 
}
