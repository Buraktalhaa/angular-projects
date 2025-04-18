import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstDirectiveDirective } from './first-directive.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FirstDirectiveDirective ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageIndex(index:number) {
    return Math.abs(this.currentPage - index) < 4
  }

  button = viewChild<ElementRef<HTMLElement>>("prevbtn") ;

currentPage = 0
images = [
  {
    title: 'Mountain',
    url: 'https://images.unsplash.com/photo-1744309327974-d7d195a36c3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Home',
    url: 'https://plus.unsplash.com/premium_photo-1744390859956-f70a9b1ab26d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Bird',
    url: 'https://images.unsplash.com/photo-1744198013781-eeb3135aaa0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'New York',
    url: 'https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Flowers',
    url: 'https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Mountain',
    url: 'https://images.unsplash.com/photo-1744309327974-d7d195a36c3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Home',
    url: 'https://plus.unsplash.com/premium_photo-1744390859956-f70a9b1ab26d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Bird',
    url: 'https://images.unsplash.com/photo-1744198013781-eeb3135aaa0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'New York',
    url: 'https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Flowers',
    url: 'https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Mountain',
    url: 'https://images.unsplash.com/photo-1744309327974-d7d195a36c3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Home',
    url: 'https://plus.unsplash.com/premium_photo-1744390859956-f70a9b1ab26d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Bird',
    url: 'https://images.unsplash.com/photo-1744198013781-eeb3135aaa0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'New York',
    url: 'https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Flowers',
    url: 'https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Mountain',
    url: 'https://images.unsplash.com/photo-1744309327974-d7d195a36c3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Home',
    url: 'https://plus.unsplash.com/premium_photo-1744390859956-f70a9b1ab26d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Bird',
    url: 'https://images.unsplash.com/photo-1744198013781-eeb3135aaa0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'New York',
    url: 'https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Flowers',
    url: 'https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Mountain',
    url: 'https://images.unsplash.com/photo-1744309327974-d7d195a36c3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Home',
    url: 'https://plus.unsplash.com/premium_photo-1744390859956-f70a9b1ab26d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Bird',
    url: 'https://images.unsplash.com/photo-1744198013781-eeb3135aaa0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'New York',
    url: 'https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Flowers',
    url: 'https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D'
  },
]
}
