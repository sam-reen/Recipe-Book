import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   ngOnInit() {
     firebase.initializeApp({
        apiKey: "AIzaSyAJ3KoyU4etYohrMIbQJ5MaKAIJddr8cFk",
        authDomain: "recipebook-2e289.firebaseapp.com"
     })
   } 
}
  
