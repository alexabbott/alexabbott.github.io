import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.scss']
})
export class ItemGalleryComponent implements OnInit {
  images: Array<string>
  url: string;
  loadCount: number;

  constructor(private imagesService: ImagesService) {
    this.loadCount = 0;
    this.url = 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:200,height:200,fit:crop/output=format:jpg,quality:95/compress/';
  }

  ngOnInit() {
    this.images = this.imagesService.images.slice(0,5);
  }

  loadMore() {
    this.loadCount += 1;

    if (this.loadCount % 5 === 0) {
      this.images = this.images.concat(this.imagesService.images.slice(this.loadCount, this.loadCount + 5));
    }

    if (this.loadCount === 100) {
      console.log('All images loaded successfully');
    }
  }
}
