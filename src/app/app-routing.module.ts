import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChangeImageComponent } from './pages/changing-image/changing-image.component';
import { FadeInImageComponent } from './pages/fade-in-image/fade-in-image.component';
import { BgImageComponent } from './pages/bg-image/bg-image.component';
import { DefaultImageComponent } from './pages/default-image/default-image.component';
import { PixelatedImageComponent } from './pages/pixelated-image/pixelated-image.component';
import { ScrollContainerComponent } from './pages/scroll-container/scroll-container.component';
import { OnLoadComponent } from './pages/onload/onload.component';
import { ResponsiveImageComponent } from './pages/responsive-image/responsive-image.component';
import { BigImagesComponent } from './pages/big-images/big-images.component';
import { AsyncImagesComponent } from './pages/async-images/async-images.component';
import { CustomObserverComponent } from './pages/custom-observer/custom-observer.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: '/fade-in-image',
    pathMatch: 'full'
  }, */
  { path: '', component: HomeComponent },
  { path: 'change-image', component: ChangeImageComponent },
  { path: 'fade-in-image', component: FadeInImageComponent },
  { path: 'bg-image', component: BgImageComponent },
  { path: 'default-image', component: DefaultImageComponent },
  { path: 'pixelated-image', component: PixelatedImageComponent },
  { path: 'scroll-container', component: ScrollContainerComponent },
  { path: 'on-load', component: OnLoadComponent },
  { path: 'responsive-image', component: ResponsiveImageComponent },
  { path: 'big-images', component: BigImagesComponent },
  { path: 'async-images', component: AsyncImagesComponent },
  { path: 'custom-observer', component: CustomObserverComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
