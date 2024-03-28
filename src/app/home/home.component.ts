import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';

  constructor() { }

  search() {
    // Implement your search logic here
    console.log('Searching for:', this.searchTerm);
    // You can perform further actions like navigating to a search results page, filtering products, etc.
  } 
}
