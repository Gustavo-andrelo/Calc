import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';

  addToDisplay(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  operation(operator: string) {
    if (this.display !== '') {
      this.display += ' ' + operator + ' ';
    }
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }
}
