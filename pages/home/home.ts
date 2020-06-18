import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

vfull_name : String;
vTimeIN : String;
vTIMEOUT : String;
vurl : String;

  date: Date;
  myDate: String;
  url: String; 
  public devotees: [] = [{"full_name":"Ramananda Gaura Das","TimeIN":"","TIMEOUT":"","url":"https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"},{"full_name":"Mani Gopal Das","TimeIN":"","TIMEOUT":"","url":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
  {"full_name":"Deveshwar Jagannath Das","TimeIN":"","TIMEOUT":"","url":""},{"full_name":"Subroto Das","TimeIN":"","TIMEOUT":"","url":""},
  {"full_name":"Suranjan Das","TimeIN":"","TIMEOUT":"","url":""},{"full_name":"Harimukundas Das","TimeIN":"","TIMEOUT":"","url":""}];

  constructor(public navCtrl: NavController, public datePipe: DatePipe, public alertCtrl: AlertController){

    // console.log(this.devotees[1]);
  this.date = new Date();
  this.url = "https://iskconnews.org/media/img_versions/2008/10-Oct/jayapataka_swami_slideshow.jpg"
  }
  changePicture()
  {
    // console.log(this.devotees)
      this.url = "https://upload.wikimedia.org/wikipedia/commons/3/34/JPS35.JPEG"
  }
  gettime()
  {
    this.date = new Date();
    this.myDate = new Date().toLocaleString()
    this.datePipe.transform(this.date, 'yyyy/MM/dd');
    // console.log(this.datePipe)
  }

  saveDevotee()
  {
// Add new person to the array
    this.devotees.push({"full_name": this.vfull_name , "url": this.vurl, "TimeIN": "", "TIMEOUT": ""})

// clear input fields
    this.vfull_name= "";
    this.vurl= "";

// confirm with user that staff is now added to the array
    const alert = this.alertCtrl.create({
      title: 'New staff!',
      subTitle: 'Staff now added!',
      buttons: ['OK']
    });
    alert.present();
 

    console.log(this.devotees)
  }
}
