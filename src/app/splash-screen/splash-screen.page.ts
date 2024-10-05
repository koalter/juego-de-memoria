import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.hide(2000);
  }

  hide(showDuration: number = 500) {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, showDuration);
  }
}
