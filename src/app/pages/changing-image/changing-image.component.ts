import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-changing-image',
  templateUrl: './changing-image.component.html',
  styleUrls: ['./changing-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeImageComponent {
  errorImage: string = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage: string = 'https://www.placecage.com/1000/1000';
  image: string = 'https://images.unsplash.com/photo-1468413922365-e3766a17da9e?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80';

  changeImage(): void {
    this.image = 'https://images.unsplash.com/photo-1488388373205-a134c1cc7e4e?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80';
  }
}
