import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LandingComponent } from './app/pages/landing/landing';

bootstrapApplication(LandingComponent, appConfig).catch((err) => console.error(err));