import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-observer',
  templateUrl: './custom-observer.component.html',
  styleUrls: ['./custom-observer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomObserverComponent {
  defaultImage: string = 'https://www.placecage.com/1000/1000';
  images: any[] = [
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/650/480/any',
    'https://placeimg.com/660/480/any',
    'https://placeimg.com/670/480/any',
    'https://placeimg.com/680/480/any',
    'https://placeimg.com/690/480/any',
    'https://placeimg.com/700/480/any',
    'https://placeimg.com/710/480/any'
  ];

  loading$ = new Subject();

  loadImages(): void {
    console.log('loading images');
    // We are using the (default) intersection observer preset
    // we will therefore need to follow its interface and set `isIntersecting` to true.
    this.loading$.next({ isIntersecting: true });
  }
}
