import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:'Rivendell',
      imageUrl: 'assets/rivendell.webp',
      iconUrl:'assets/rivendellSymbol.jpg',
      subtitle: '@burak',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate aut natus est, dicta ipsam expedita quibusdam ipsum alias, commodi eius? Quos, repellat quis ducimus nesciunt voluptatibus ipsam! Nisi, nesciunt.',
      label1: '#full-stack',
      label2: '#angular',
      label3: '#typeScript',
    },
    {
      title:'Erebor',
      imageUrl: 'assets/erebor.webp',
      iconUrl:'assets/durin.webp',
      subtitle: '@talha',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sit voluptatem architecto obcaecati iste rerum aspernatur eveniet, cum consequatur, mollitia consectetur provident ipsa nostrum. Repudiandae doloribus est?',
      label1: '#full-stack',
      label2: '#angular',
      label3: '#typeScript',
    },
    {
      title:'Gondor',
      imageUrl: 'assets/gondorTree.png',
      iconUrl: 'assets/whiteTree.avif',
      subtitle: '@memis',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At maiores ut ea nostrum? Debitis deserunt in eaque et. Rerum excepturi laboriosam mollitia ipsam obcaecati quas possimus nisi quae quam beatae distinctio autem!',
      label1: '#full-stack',
      label2: '#angular',
      label3: '#typeScript',
    },

  ]
}
