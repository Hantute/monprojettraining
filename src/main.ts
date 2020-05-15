import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AdminModule } from './app/admin/admin.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)  // déclenche le chargement et l'execution de module de type typescript
  //platformBrowserDynamic().bootstrapModule(AdminModule)  // déclenche le chargement et l'execution de module de type typescript
  .catch(err => console.error(err));
