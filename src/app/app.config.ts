import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

import { provideStore } from '@ngrx/store';
import { filesReducer } from './store/files/files.reducer';
import { userReducer } from './store/user/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({ files: filesReducer, user: userReducer }),
  ],
};
