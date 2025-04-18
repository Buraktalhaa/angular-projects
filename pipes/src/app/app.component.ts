import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from "./convert.pipe";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = '';
  date = '';
  cost:number = 0;
  km:number = 0

  getName(event: Event) {
    const inputName = event.target as HTMLInputElement;
    this.name = inputName.value;
  }

  getDate(event:Event){
    const inputDate = event.target as HTMLInputElement;
    this.date = inputDate.value;
  }

  getCost(event:Event){
    const inputCost = event.target as HTMLInputElement;
    this.cost = parseFloat(inputCost.value) ;
  }

  getMiles(event:Event){
    const inputMil = event.target as HTMLInputElement;
    this.km = parseFloat(inputMil.value);
  }
}
