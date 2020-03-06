import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { FadeInImageComponent } from './pages/fade-in-image/fade-in-image.component';
import { BgImageComponent } from './pages/bg-image/bg-image.component';
import { DefaultImageComponent } from './pages/default-image/default-image.component';
import { PixelatedImageComponent } from './pages/pixelated-image/pixelated-image.component';
import { ScrollContainerComponent } from './pages/scroll-container/scroll-container.component';
import { ChangeImageComponent } from './pages/changing-image/changing-image.component';
import { OnLoadComponent } from './pages/onload/onload.component';
import { ResponsiveImageComponent } from './pages/responsive-image/responsive-image.component';
import { BigImagesComponent } from './pages/big-images/big-images.component';
import { AsyncImagesComponent } from './pages/async-images/async-images.component';
import { CustomObserverComponent } from './pages/custom-observer/custom-observer.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FadeInImageComponent,
    BgImageComponent,
    DefaultImageComponent,
    PixelatedImageComponent,
    ScrollContainerComponent,
    ChangeImageComponent,
    OnLoadComponent,
    ResponsiveImageComponent,
    BigImagesComponent,
    AsyncImagesComponent,
    CustomObserverComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule.forRoot(intersectionObserverPreset)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
