# Angular-6-7-Elements-Example
angular elements example, compatible with IE, angular, and non angular apps

#Developing
Clone and of course, npm install. Run the following commands in /elements:
```
npm install -g http-server
http-server
```
localhost/8080 should now be showing your component. It is hosted in index.html (in the elements folder), a basic html page that represents injecting into a non angular app.
When you make a change, run the following command in the angularElementsExample folder:
```
npm run build:elements
```
The instructions for turning an Angular Element into a single file came from here: https://scotch.io/tutorials/build-a-reusable-component-with-angular-elements#toc-make-the-component-an-angular-element

#Using in a vanilla JS app
Put this in the HTML where you want to use the element:
```
    <shout-element></shout-element>

    <script type="text/javascript" src="shout-element.js"></script>
```
Of course, adjust the src path to where you have the file. 

#Using in another Angular App
There are times this would be necessary, perhaps you want to add an element to an older version of Angular. 

Run ```npm install --save @webcomponents/webcomponentsjs``` and add ```import '@webcomponents/webcomponentsjs/webcomponents-loader.js'``` to your polyfills.ts

Remove ```import 'zone.js'``` from polyfills.ts in the angular project. The web element uses zone and will lead to errors if you import in both places.
If for some reason you dynamically load the component, you may need to make some changes in your main.ts, like below:
```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
declare var System
if (!window['Zone']) {
  System.import('zone.js/dist/zone');
}
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
```

In app.module, make the following changes: 
```
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core' //***

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import './shout-element.js' //***

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ***
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```




