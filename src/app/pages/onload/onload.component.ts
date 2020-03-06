import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-onload',
  templateUrl: './onload.component.html',
  styleUrls: ['./onload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnLoadComponent {
  isLoading: boolean = true;
  errorImage: string = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage: string = 'https://www.placecage.com/1000/1000';
  image: string = 'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80';

  constructor(private cd: ChangeDetectorRef) {}

  onLoadImage(success: boolean): void {
    if (success) {
      this.isLoading = false;
      this.cd.detectChanges();
    } else {
      alert('Image cannot be loaded!');
    }
  }
}
