import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import 'jquery/dist/jquery.slim';
// window['$'] = window['jQuery'] = window['jquery-slim'];


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
