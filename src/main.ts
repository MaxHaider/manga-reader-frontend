import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppModule } from './app/modules/app.module';
=======
import { AppModule } from './app/app.module';
>>>>>>> ab1e760... :sparkle: fresh cli setup
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
