import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  name = 'Angular';
  imageObject = [
    {
      image:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/terminus-community-gallery.jpg',
      thumbImage:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/terminus-community-gallery.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/royal-center-community-gallery.jpg',
      thumbImage:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/royal-center-community-gallery.jpg',
      title: 'Example two with title.',
    },
    {
      image:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/terminus-community-gallery.jpg',
      thumbImage:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/terminus-community-gallery.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/royal-center-community-gallery.jpg',
      thumbImage:
        'https://copiana.com/wp-content/themes/copianacom/public/images/home/events/royal-center-community-gallery.jpg',
      title: 'Example two with title.',
    },
  ];
}
