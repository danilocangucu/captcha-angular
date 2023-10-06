import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(private router: Router) { }

  resetProgress() {
    localStorage.setItem('progress', '0');
    this.router.navigate(['/captcha']);
  }

  ngOnInit() {
    const progress = localStorage.getItem('progress');
    if (progress !== '100') {
      this.router.navigate(['/captcha']);
    }
  }

}
