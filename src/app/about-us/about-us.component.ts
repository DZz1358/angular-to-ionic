import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonRouterLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, IonContent, RouterLinkWithHref, IonRouterLink],

  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
