import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponent implements OnInit {
  showNavigationIndicators = false;
  showNavigationArrows = false;

  landingPage=true;
  videoForm=false;
  form=false;
  video=false;
  getNote=false;
  msg=false;

  
  constructor(config: NgbCarouselConfig) { 
    config.showNavigationIndicators = false;
    config.interval = 50000;
  }

  ngOnInit(): void {
  }

  showvideoForm(){
    this.landingPage = false;
    this.videoForm = true
  }
  showForm(){
    this.videoForm = false;
    this.form = true;
  }
  showVideo(){
    this.form = false;
    this.video = true; 
  }
  showMsg(){
    setTimeout('closeVideo()', 30000)
  }
  closeVideo(){
    this.video = false;
    this.getNote = true; 
  }
  showMsgEnd(){
    this.getNote = false;
    this.msg = true; 
  }
  showLandingPage(){
    this.msg = false;
    this.landingPage = true; 
  }
}
