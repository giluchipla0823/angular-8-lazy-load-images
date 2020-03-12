import { Component } from '@angular/core';

@Component({
  selector: 'app-default-image',
  templateUrl: './default-image.component.html',
  styleUrls: ['./default-image.component.scss']
})
export class DefaultImageComponent {
  /*
  errorImage: string = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage: string = 'https://www.placecage.com/1000/1000';

  images: any[] = [
    'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80',
    'https://images.unsplash.com/photo-1468103933896-2c34a78104c2?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80',
    'https://images.unsplash.com/photo-1471201187657-6406da15e43b?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80'
  ];
  */

 errorImage: string = 'assets/01.jpg';
 defaultImage: string = 'assets/01.jpg';

 images: any[] = [
  'assets/01.jpg',
  'assets/02.jpg',
  'assets/03.jpg',
];
}
