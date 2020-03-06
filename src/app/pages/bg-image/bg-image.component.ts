import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bg-image',
  templateUrl: './bg-image.component.html',
  styleUrls: ['./bg-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BgImageComponent {
  errorImage: string = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage: string = 'https://www.placecage.com/1000/1000';

  images: any[] = [
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?dpr=1&auto=format&fit=crop&w=1500&h=894&q=80&cs=tinysrgb',
    'https://images.unsplash.com/photo-1474871256005-cbf50b902421?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb',
    'https://images.unsplash.com/photo-1496396297824-fdda3c54ad14?dpr=1&auto=format&fit=crop&w=1500&h=999&q=80&cs=tinysrgb'
  ];
}
