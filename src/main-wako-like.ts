import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { WakoProviders } from '@wako-app/mobile-sdk';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, IonicModule.forRoot({
            swipeBackEnabled: true,
            backButtonText: '',
            mode: 'md',
        }), AppRoutingModule, TranslateModule.forRoot(), IonicStorageModule.forRoot({
            name: 'wako',
        })),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ...WakoProviders,
    ]
})
  .catch((err) => console.error(err));
