# 7customs

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


- npm install @fortawesome/free-brands-svg-icons
- npm install @ngx-translate/http-loader --save
- npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
- npm install --legacy-peer-deps
- npm install @popperjs/core --legacy-peer-deps 
- ng add @ng-bootstrap/ng-bootstrap
- npm install zone.js@0.15 --save --legacy-peer-deps
- npm install --save-dev typescript@5.8
-npm i @ngx-translate/core @ngx-translate/http-loader

ensuite config dooit ressembler à ca apres cette migration
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    provideTranslateService({
      fallbackLang: 'fr',        // remplace defaultLanguage + useDefaultLang
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',  // dossier des fichiers JSON
        suffix: '.json'            // extension
      })
    })
  ],
};
dans chaque composant import ceci
-import { TranslateService, TranslatePipe } from '@ngx-translate/core';
   imports: [
    RouterModule,
    CommonModule,
    TranslatePipe,
  ],
  
  constructor(private translate : TranslateService){}

   // fonction de traduction 
  translateText(lang : string ){
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }
* DEPLOIEMENT SUR GITHUB 
ng add angular-cli-ghpages
ng build --base-href /v1customsLiege/
ng deploy





