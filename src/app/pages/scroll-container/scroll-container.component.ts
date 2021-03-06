import { Component, ChangeDetectionStrategy, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-container',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollContainerComponent implements OnInit {
  myScrollContainer!: HTMLElement;
  images = [
    'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80',
    'https://images.unsplash.com/photo-1468103933896-2c34a78104c2?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80',
    'https://images.unsplash.com/photo-1471201187657-6406da15e43b?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80'
  ];
  errorImage = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage = 'https://www.placecage.com/1000/1000';

  constructor(private elmRef: ElementRef) {}

  ngOnInit() {
    this.myScrollContainer = this.elmRef.nativeElement.querySelector('#my-scroll-container');
  }
}
