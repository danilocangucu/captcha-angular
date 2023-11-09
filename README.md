# Angular CAPTCHA Project

This is an Angular project that includes two CAPTCHA challenges: one using hCaptcha and the other using reCAPTCHA. The user's progress through the challenges is tracked and stored in `localStorage`. When the user completes both challenges, they are redirected to a `/result` route where they can see a congratulatory message and reset their progress if they want to do the challenges again.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download Node.js from the [official website](https://nodejs.org/en/download/). npm is included in the Node.js installation.

### Installing

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-repo/angular-captcha.git
   ```

2. Navigate to the project directory:

   ```bash
   cd captcha-angular
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:4200/` to see the application in action.

## Usage

When you navigate to the `/captcha` route, you'll see two CAPTCHA challenges. The user's progress is displayed in a progress bar at the top of the page, created using Angular Material's mat-progress-bar. When the user completes both challenges, they are redirected to the `/result` route where they can see a congratulatory message. If the user wants to do the challenges again, they can click the "Reset progress and start over" button to reset their progress and be redirected back to the `/captcha` route.

## Built With

* [Angular](https://angular.io/) - The web framework used
* [reCAPTCHA](https://www.google.com/recaptcha) - The CAPTCHA service used for the first challenge
* [hCaptcha](https://www.hcaptcha.com/) - The CAPTCHA service used for the second challenge
* [Angular Material](https://material.angular.io/) - The UI library used for the progress bar
