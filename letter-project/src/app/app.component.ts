import { Component } from '@angular/core';
import { faker } from '@faker-js/faker'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = faker.lorem.sentence()
  enteredText = ''


  getValue(event: InputEvent) {
    console.log(this.randomText.split(''))
    const input = event.target as HTMLInputElement;
    console.log(input.value)
    this.enteredText = input.value
  }

  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return letter === enteredLetter ? 'correct' : 'incorrect';
  }
}
