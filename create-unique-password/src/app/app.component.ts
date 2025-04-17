import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password';
  password = ''

  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;


  modifyLength(event: Event) {
    const input = event.target as HTMLInputElement;
    const parsedValue = parseInt(input.value)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
      // debugger;
      console.log(this.length);
    }
  }

  // Change Events
  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword
  }
}
