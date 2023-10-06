import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  progress = 0;

  constructor(private router: Router) {
    const storedProgress = localStorage.getItem('progress');
    if (storedProgress) {
      this.progress = Number(storedProgress);
    }
  }

  ngOnInit() {
    const progress = localStorage.getItem('progress');
    if (progress === '100') {
      this.router.navigate(['/result']);
    }
  }

  private updateProgressInLocalStorage() {
    localStorage.setItem('progress', this.progress.toString());
  }
  
  updateRecaptchaWin() {
    this.progress = 50;
    this.updateProgressInLocalStorage();
  }

  updateHcaptchaWin() {
    this.progress = 100;
    this.updateProgressInLocalStorage();
    this.router.navigate(['/result']);
  }

}
