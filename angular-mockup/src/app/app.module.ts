import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ImagesService } from './images.service';

import { AppComponent } from './app.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { CuratedItemsComponent } from './curated-items/curated-items.component';
import { ItemGalleryComponent } from './item-gallery/item-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    CuratedItemsComponent,
    ItemGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
