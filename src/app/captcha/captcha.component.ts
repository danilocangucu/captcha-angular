import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css'],
})
export class CaptchaComponent {
  progress: number = 0;
  challengeType: 'recaptcha' | 'hcaptcha' | 'text' = 'recaptcha';
  challengeStrings: string[] = [];
  userInput: string = '';

  constructor(private router: Router) {
    const storedProgress = localStorage.getItem('progress');
    if (storedProgress) {
      this.progress = Number(storedProgress);
    }
    this.generateChallengeStrings();
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

  updateChallengeWin() {
    if (
      this.challengeType === 'recaptcha' ||
      this.challengeType === 'hcaptcha'
    ) {
      this.progress += 33;
    } else {
      this.progress += 34;
    }
    this.switchChallenge();
    this.updateProgressInLocalStorage();
  }

  generateChallengeStrings() {
    this.challengeStrings.push(this.generateRandomString(6)); // Change 6 to the desired length of your string
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  checkTextChallenge() {
    if (this.userInput === this.challengeStrings[0]) {
      this.updateChallengeWin();
      this.userInput = '';
    }
  }

  switchChallenge() {
    if (this.challengeType === 'recaptcha') {
      this.challengeType = 'hcaptcha';
    } else if (this.challengeType === 'hcaptcha') {
      this.challengeType = 'text';
    } else {
      this.router.navigate(['/result']);
    }
    this.updateProgressInLocalStorage();
  }
}
