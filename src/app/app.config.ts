import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "hayama-one-alt", appId: "1:985998555494:web:1b1505b0634052c08430a7", storageBucket: "hayama-one-alt.firebasestorage.app", apiKey: "AIzaSyAsWInVwR2eALZEbx0tvij8uv9hF339rvw", authDomain: "hayama-one-alt.firebaseapp.com", messagingSenderId: "985998555494", measurementId: "G-B5PP02VXNK" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())
  ]
};
