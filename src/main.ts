import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { PluginLoaderService } from './app/services/plugin-loader.service';
import { PluginLoaderFakeService } from './app/services/plugin-loader-fake.service';
import { WakoProviders } from '@wako-app/mobile-sdk';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PluginModule } from '../projects/plugin/src/plugin/plugin.module';
import { AppComponent } from './app/app.component';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, TranslateModule.forRoot(), PluginModule),
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy,
        },
        {
            provide: PluginLoaderService,
            useClass: PluginLoaderFakeService,
        },
        ...WakoProviders,
        provideIonicAngular({
            swipeBackEnabled: true,
            backButtonText: '',
            mode: 'md',
            innerHTMLTemplatesEnabled: true,
        }),
    ]
})
  .catch(err => console.log(err));
