import { Component, ChangeDetectionStrategy } from '@angular/core';
import { from, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-async-images',
  templateUrl: './async-images.component.html',
  styleUrls: ['./async-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncImagesComponent {
  errorImage: string = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage: string = 'https://www.placecage.com/300/300';

  promiseImage = Promise.resolve('https://picsum.photos/id/236/300/300');
  rxjsFromImage = from(['https://picsum.photos/id/237/300/300']);
  timeoutImage = new Promise(r => setTimeout(r, 0, 'https://picsum.photos/id/238/300/300'));
  asyncSchedulerImage = from(Promise.resolve('https://picsum.photos/id/239/300/300'), asyncScheduler);
}
