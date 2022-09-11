import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['15.JPG', '16.JPG', '2.JPG'];
  headlines = [
                'Time to fly above the waves', 
                'Beach lauching zone', 
                'Ride til dusk! or collape'
              ];

  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage() {
    

    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(()=>{
        this.showImage =true;
      }, 10);
    },8000);
  }
}
