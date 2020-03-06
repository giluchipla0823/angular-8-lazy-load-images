import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-big-images',
  templateUrl: './big-images.component.html',
  styleUrls: ['./big-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigImagesComponent {
  defaultImage: string = 'https://www.placecage.com/1000/1000';

  imageArray: any[] = [
    'https://images.unsplash.com/photo-1563769874043-9eac75ae0049',
    'https://images.unsplash.com/photo-1561209309-d72e5babe14e',
    'https://images.unsplash.com/photo-1563775421597-ecf0fc7f9c04'
  ];
}
