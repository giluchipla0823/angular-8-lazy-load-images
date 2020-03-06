import { Component, ChangeDetectionStrategy } from '@angular/core';

const UNSPLASH_URL: string = 'https://images.unsplash.com/';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveImageComponent {
  screenLg: string = '1200px';
  screenMd: string = '992px';
  screenSm: string = '768px';

  errorImage: string = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage: string = 'https://www.placecage.com/1000/1000';

  images1: string = `${UNSPLASH_URL}photo-1434725039720-aaad6dd32dfe?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80 700w,
               ${UNSPLASH_URL}photo-1431290897562-d9453d416346?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80 900w,
               ${UNSPLASH_URL}photo-1437818628339-19ded67ade8e?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80 1100w`;

  images2: string = `${UNSPLASH_URL}photo-1443986870756-31166604c63c?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80 700w,
               ${UNSPLASH_URL}photo-1419332509237-efe2d26323db?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80 900w,
               ${UNSPLASH_URL}photo-1440091253659-eb80d9370717?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80 1100w`;

  image1: string = `${UNSPLASH_URL}photo-1422004707501-e8dad229e17a?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80`;
  image2: string = `${UNSPLASH_URL}photo-1439931444800-9bcc83f804a6?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80`;
  image3: string = `${UNSPLASH_URL}photo-1417128281290-30a42da46277?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80`;
  image4: string = `${UNSPLASH_URL}photo-1504872672611-7884b8ecd01a?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80`;

  image5 = `${UNSPLASH_URL}photo-1413803694176-3244d6096628?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80`;
  image6 = `${UNSPLASH_URL}photo-1415862511713-810601557946?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80`;
  image7 = `${UNSPLASH_URL}photo-1437209484568-e63b90a34f8b?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80`;
  image8 = `${UNSPLASH_URL}photo-1440429645186-5d305998a4d1?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80`;
}
