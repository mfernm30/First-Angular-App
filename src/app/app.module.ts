import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldInterpolationComponent } from './2hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldComponent } from './1hello-world/hello-world.component';
import { HelloWorldBindingsComponent } from './3hello-world-bindings/hello-world-bindings.component';
import { HelloWorldNgIfComponent } from './4hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDependencyInjectionComponent } from './5hello-world-di/hello-world-di.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
