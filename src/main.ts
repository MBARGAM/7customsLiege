/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import 'zone.js';  // Zone.js must be imported for Angular to work

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
