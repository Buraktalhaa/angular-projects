import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title:string = '';
  @Input() imageUrl:string = '';
  @Input() iconUrl:string = '';
  @Input() subtitle:string = '';
  @Input() content:string = '';
  @Input() label1:string = '';
  @Input() label2:string = '';
  @Input() label3:string = '';
}
